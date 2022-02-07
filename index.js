const Discord = require("discord.js");
const client = new Discord.Client({
    Intents: [Discord.Intents.FLAGS.GUILD_MESSAGES]
    // You can add more intent but i'm just lazy to do this :)
});

const { inlineReply } = require("./inline-reply.js");
const settings = {
    token: "YOUR BOT'S TOKEN HERE"//don't forget this
    prefix: "!"
};

client.on("messageCreate", (message) => {
    if (message.content.toLowerCase() === `${settings.prefix}hey`) {
         if (message.author.bot) return;

         inlineReply(message.id, message.channel, "Hey");
         inlineReply(message.id, message.channel, new Discord.MessageEmbed()
             .setDescription(`My prefix is ${settings.prefix}`)
         , true);
    };
});

client.login(settings.token);
