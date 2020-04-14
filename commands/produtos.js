const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    let embed = new Discord.RichEmbed()
      .setAuthor(`Produtos JS`)
      .addField(`Bot Simples:`, `R$5,00 ou 20 Invites`)
      .addField(`Bot Mediano`, `R$15,00 ou 30 Invites`)
      .addField(`Bot Completo`, `R$25,00 ou 40 Invites`)
      .setDescription(`**Para obter esses produtos só criar um ticket e aguardar ou ir na call <#691439715794157618> e aguardar**`)
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