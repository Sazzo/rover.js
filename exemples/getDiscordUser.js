const Client = require("../index")

const rover = new Client()

async function user() {
const user = await rover.getDiscordUser("326123612153053184")
console.log(user)
}

user()