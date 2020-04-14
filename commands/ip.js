const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    let embed = new Discord.RichEmbed()
      .setAuthor(`IP REDE FURION`)
      .addField(`Ip`, `EM DESENVOLVIMENTO`)
      .addField(`Motivo:`, `EM CONSTRUÇÃO`)
      .setDescription(`** Terá que esperar o servidor ficar pronto e online para ter acesso ao ip**`)
      .setColor(message.member ? message.member.displayColor : global.CLIENT_DEFAULT_COLOR)

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'produtos',
      description: 'Mostra os produtos que temos no servidor.',
      usage: '-produtos',
      caregory: 'Membros'
    }
  }
}