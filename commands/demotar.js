const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  message.delete().then(message => message.delete(5000));

  //////////////////////////////////
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("⛔| **Desculpe, você não tem permissão para usar isso!**").then(message => message.delete(10000));
  
  const user = message.mentions.members.first() || message.guild.members.get(args[0])
  if (!user) return message.channel.send("Use: demotar <@user> <@cargo>").then(message => message.delete(7000));
  
  const role = message.mentions.roles.first() || message.guild.roles.get(args[1])
 if(user.roles.has(role.id)) return;

  //////////////////////////////////
  const embed = new Discord.RichEmbed()
    .setTitle("Change-log")
    .setThumbnail(user.user.avatarURL)
    .setDescription(
      `󠂪󠂪󠂪
       ◼️ **Staff:** ${user.user.tag}
       ◼️ **cargo:** ${role}
       ◼️ **Quem demotou:** ${message.author}   󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 
        `
    )
  //////////////////////////////////
  
  await user.removeRole(role);
  
  message.channel.send(embed);

};