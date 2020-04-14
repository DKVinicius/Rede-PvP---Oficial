const Discord = require('discord.js')

exports.run = (client, message, args) => {
  message.guild.createChannel(`Ticket-${message.author.username}`, { type: 'text' }).then(x => {
x.overwritePermissions(message.author.id, {
    'VIEW_CHANNEL': true,
    'SEND_MESSAGES': true
})
x.overwritePermissions(message.guild.roles.find(x => x.name == '@everyone'), {
'VIEW_CHANNEL': false     
})
        x.send(" <a:carregando:694940081408049264> | **Aguarde um staff, ao acabar o ticket peça pra um staff excluir esse chat... <a:sino:694939653962465291> **").then(y => {
            y.react("❌")
            let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
            const coletor = y.createReactionCollector(filtro);
            coletor.on("collect", ap => {
            x.send("O canal será deletado em 5 segundos!")
            setTimeout(() => {
                x.delete();
                }, 5000) 
            })
        })
        })
    } 

    exports.config = {
        name: 'ticket',
    } 