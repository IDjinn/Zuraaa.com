const { partialBotObject } = require("../../utils/bot");
const mongoose = require("mongoose");

const router = require("express").Router();


module.exports = (mongo) => {
  const handleBotId = async (req) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "Invalid id" });
    const bot = await mongo.Bots.findById({ _id: id }).exec();
    if (!bot) return res.status(404).json({ message: "Bot not found" });
    return bot;
  }

  router.get("/:id", async (req, res) => {
    const bot = await handleBotId(req);
    return res.status(200).json(partialBotObject(bot));
  });

  router.get("", async (req, res) => {
    let limit = Math.min(Number(req.query.limit) || 1, 15);
    let after = Number(req.query.after) || 0;

    const bots = await mongo.Bots.aggregate([
      { $skip: after },
      { $limit: limit },
    ]);

    return res.status(200).json(bots.map(partialBotObject));
  });

  router.patch("/:id", async (req, res) => {
    const bot = await handleBotId(req);
    const { data, token } = req.body;
    if (!data)
      return res.status(400).json({ message: 'Missing data' });

    if (!token || bot.tokens.current != token)
      return res.status(401).json({ message: 'Token invalid' });

    const { guilds } = data;
    if (isNaN(guilds) || Math.max(guilds, -1) == -1)
      return res.status(400).json({ message: 'Invalid number: guilds muste be positive number' })

    bot.count.guilds = guilds;
    await bot.save();
    res.status(204).send();
  });

  return router;
};