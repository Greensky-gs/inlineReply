const Discord = require("discord.js");
const client = new Discord.Client({
    Intents: [Discord.Intents.FLAGS.GUILD_MESSAGES]
    // You can add more intent but i'm just lazy to do this :)
});
