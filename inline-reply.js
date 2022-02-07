module.exports.inlineReply = (messageId, channel, text, isEmbed) => {
    const embed = isEmbed || false;
    const object = {data:{messages_references:{
         message_id: messageId,
         channel_id: channel.id,
         guild_id: channel.guild.id
    }}};

    if (embed) data.embeds = [ content ];
    else data.content = content;

    channel.send(object);
};
