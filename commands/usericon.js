exports.run = async (bot, message, args) => {
    const Discord = require("discord.js");
  message.delete().then(message => message.delete(7000));
    
    const user = message.mentions.users.first() || message.author;
    const avatar = user.displayAvatarURL;
    const Embed = new Discord.RichEmbed()
  
      .setColor("#df6300")
      .setAuthor(`${user.username}`, user.displayAvatarURL)
      .setDescription(`[Link Direto](${avatar})`)
      .setImage(avatar)
      .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`);
  
    message.channel.send(Embed);
  }