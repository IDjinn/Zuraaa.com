# Zuraaa.com

Site que tem como objetivo divulgar aplicações (bots, servers e serviços) para Discord, atualmente focado no mercado brasileiro de desenvolvedores.

Acompanhe o desenvolvimento [Clicando Aqui](https://github.com/zuraaa-projects/Zuraaa.com/projects/1)

**Baixar e Inicializar a Aplicação:**
Baixe o codigo fonte usando o [Git](https://git-scm.com/downloads)
```sh
$ git clone https://github.com/zuraaa-projects/Zuraaa.com.git
```

Na pasta da Aplicação Crie um Arquivo chamado config.json
```js
{
    "server": {
        "port": 80,
        "session": {
            "secret": "Insira uma chave para criptografar a session aqui"
        }
    },

    "database": {
        "mongo": {
            "url": "url do seu mongodb"
        }
    },

    "oauth": {
        "urls": {
            "authorization": "https://discord.com/api/oauth2/authorize",
            "token": "https://discord.com/api/oauth2/token",
            "redirect": "http://localhost/oauth2/callback"
        },
        "client": {
            "id": "id da aplicação do discord",
            "secret": "secret da aplicação do discord"
        }
    },

    "discord": {
        "endpoints": {
            "userMe": "https://discord.com/api/users/@me"
        },
        "servers": {
            "support": "https://discord.gg/V3VcDx5"
        }
    }
}
```

Após configurar a aplicação basta baixar as dependências e rodar a aplicação:
```sh
$ npm i
$ npm start
```
