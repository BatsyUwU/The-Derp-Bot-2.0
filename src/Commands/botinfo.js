const Discord = require('discord.js');


exports.run = (client, message, args, ops) => {

    let user = message.guild.members.find('displayName', 'Shiro')
    message.channel.send(`${user} What?`);
    let botEmbed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#7289DA")
    .addField("Bot Name", client.user.username)
    .addField("Created By", user.user.tag)

    return message.channel.send(botEmbed);
}