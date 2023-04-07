const { ButtonBuilder } = require('discord.js');

module.exports = (id, label, style, link, disabled) => {
    if(link != null){
        var button = new ButtonBuilder()
                    .setLabel(label)
                    .setStyle(style)
                    .setURL(link)
                    .setDisabled(disabled)
    }else{
        var button = new ButtonBuilder()
                    .setCustomId(id)
                    .setLabel(label)
                    .setStyle(style)
                    .setDisabled(disabled)
    }
    return(button)
};