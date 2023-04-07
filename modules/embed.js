const { EmbedBuilder } = require('discord.js');

module.exports = (title, color, desc, image, footer_msg, footer_logo) => {
    var embed = new EmbedBuilder()
        .setColor(color)
        .setTitle(title)
        .setDescription(desc)
        .setImage(image)
        .setTimestamp()
        .setFooter({ text: footer_msg, iconURL: footer_logo });
    return embed;
};