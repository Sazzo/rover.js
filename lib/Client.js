const p = require("phin")
module.exports.Client = class Client {
    constructor(options) {
        this.apiKey = options
    }

    async getDiscordUser(id) {
        const discordUser = await p({
            url: `https://verify.eryn.io/api/user/${id}`,
            method: "GET",
            parse: "json"
        })
        switch(discordUser.statusCode) {
            case 404: {
                throw new Error("User not found.")
            }
            case 429: {
                throw new Error("You are being ratelimited!")
            }
            case 200: {
                return discordUser.body
            }
        }
    }
}