const Discord = require('discord.js');
const c = require('../config.json')

module.exports.run = async (client, message, args) => {
    message.delete()

    const erros = new Discord.RichEmbed()
        .setAuthor("Rede Misty - Erro", client.user.avatarURL)
        .setDescription(`${message.author}, não consigo enviar mensagem para você, ative suas mensagens diretas!`)
        .setTimestamp()
        .setThumbnail(client.user.avatarURL)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setColor('RANDOM')

    const yes = new Discord.RichEmbed()
        .setAuthor(`Loja JS - Ajuda`)
        .setDescription(` <a:sino:694939653962465291> ${message.author}, enviei meus comandos em seu privado! <a:sino:694939653962465291> `)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(yes).then(msg => msg.delete(12000))

    const embed = new Discord.RichEmbed()
        .setAuthor(`Rede Empire- Ajuda`)
        .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
        .addField(`<a:estrelinha:695791771615101010> **Informações**`, '• `ajuda`, `server`, `user`, `sugerir`, `avatar`...')
        .addField(`<a:carregando:694940081408049264> **Pedidos**`, '• `plugin`, `web`, `outros`...')
        .addField(`<a:sino:694939653962465291> **Usuário**`, '• `portfolio`, `recomendações`, `reputação`...')
        .addField(`<a:aniDancing:694707002084950057> **Diversão**`, '• `bigtext`, `lenny`, `coinflip`, `dados`...')
        .addField(`<a:musica:695792687906947134> **Música**`, '• `play`, `stop`, `skip`, `playlist`...')
        .addField(`<a:ban:695777515968397333>**Staff**`, '• `ban`, `mute`, `chat`, `limpar`...')
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setColor('RANDOM')
    message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
        await msg.react('⭐')
        await msg.react('📥')
        await msg.react('👦')
        await msg.react('😂')
        await msg.react('🎶')
        await msg.react('🔧')
        await msg.react("↩")


        const informacao = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id;
        const pedidos = (reaction, user) => reaction.emoji.name === '📥' && user.id === message.author.id;
        const usuario = (reaction, user) => reaction.emoji.name === '👦' && user.id === message.author.id;
        const diversao = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
        const musica = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
        const staff = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;

        const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

        const informacaoL = msg.createReactionCollector(informacao)
        const usuarioL = msg.createReactionCollector(usuario)
        const pedidosL = msg.createReactionCollector(pedidos)
        const diversaoL = msg.createReactionCollector(diversao)
        const musicaL = msg.createReactionCollector(musica)
        const staffL = msg.createReactionCollector(staff)

        const backL = msg.createReactionCollector(back)


        backL.on('collect', r => {
            const embedd = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                .addField(`⭐ **Informações**`, '• `ajuda`, `server`, `user`, `sugerir`, `avatar`, ...')
                .addField(`👦 **Usuário**`, '• `portfolio`, `recomendações`, `reputação`...')
                .addField(`😂 **Diversão**`, '• `bigtext`, `lenny`, `coinflip`, `dados`...')
                .addField(`🎶 **Música**`, '• `play`, `stop`, `skip`, `playlist`...')
                .addField(`🔧 **Staff**`, '• `ban`, `mute`, `chat`, `limpar`...')
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setColor("RANDOM")
            msg.edit(embedd)
        })

        informacaoL.on('collect', r => {

            const embedinformacao = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`<a:estrelinha:695791771615101010> **UTEIS**

                /ajuda - Exibe o menu de ajuda.
                /serverinfo - Mostra status do servidor.
                /userinfo - Mostra o perfil do usuário.
                /botinfo - Mostra informações sobre mim.
                /sugestão \`<sugestão>\` - Crie uma sugestão para melhorar nosso servidor.
                /avatar - Mostra o avatar de um usuário ou do próprio usuário que usou o comando.
                /invites - Mostra o rank de convites.
                /lembrete \`<tempo>\` \`<lembrete>\` - Te lembra de algo importante.
                /ping - Mostra o delay bot-servidor.
         `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedinformacao)
        })

        pedidosL.on('collect', r => {

            const embedpedidos = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`<a:carregando:694940081408049264> **DUVIDA**

                /ticket - abre um ticket para tirar duvidas
         `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedpedidos)
        })

        usuarioL.on('collect', r => {
            const embedusuario = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`<a:sino:694939653962465291> **USUARIO**
                        
               /usericon \`<@usuário>\` - Mostra o icone do player
               /userinfo \`<@usuário>\` - Mostra informações do player
               /serverinfo - Mostra informações do servidor
               /botinfo - Mostra informações do bot

        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedusuario)
        })

        diversaoL.on('collect', r => {
            const embeddiversao = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`<a:aniDancing:694707002084950057> **DIVERSÃO**
                        
                /dados \`<quantidade>\` - Joga até 5 dados na mesa.
                /coinflip - Joga moeda para cima.
                /emojify \`<texto>\`- Transforma seus textos em emojis.
                /random - Mostra aleatoriamente um número.
                /say \`<mensagem>\` - Faz com que eu repita uma frase.
                /guess - Acerte o número aleatório em 10 tentativas.
                /8ball \`<mensagem>\` - Responde suas perguntas.
                /biscoito \`<usuário>\` - Da um biscoito para um usuário. 🍪
                /tapa \`<usuário>\` - Da um tapa em um usuário.
                /morse \`<mensagem>\` - Transforma um texto em código morse.
                /hex \`<código hex>\` - Mostra o hex e o rgb de uma cor.
                /dog - Mostra uma imagem fofinha de cachorro.
                /cat - Mostra uma imagem fofinha de gato.
                /triggerd \`<usuário>\` - Deixa um usuário irritado.
                /faketweet \`<usuário>\` \`<mensagem>\` - Cria um tweet fake apartir de um usuário.

        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao)
        })

        musicaL.on('collect', r => {
            const embeddiversao = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`<a:musica:695792687906947134> **Música**
                        
                /play \`<nome da música/url>\` - Escolhe uma música para tocar.
                /stop - Para a música.
                /skip - Pula uma música.
                /playlist - Mostra aleatoriamente um número.
                /pause - Pausa a música.
                /resume - Retoma a música.
                /tocando - Mostra a música que esta tocando no momento.
                /volume \`<altura>\` - Define o volume da música.
              

        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao)
        })

        staffL.on('collect', r => {
            const embeddiversao = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`<a:ban:695777515968397333> **Staff**
                        
                /ban \`<usuário>\` \`<razão>\` - Bane um usuário.
                /mute \`<usuário>\` \`<tempo>\` \`<razão>\` - Muta um usuário por certo tempo.
                /unban \`<usuário>\` - Desbane um usuário.
                /unmute \`<usuário>\` - Desmuta um usuário.
                /clear \`<quantidade>\` - Limpa uma certa quantia de mensagens. (1 a 100)
                /listban - Envia no privado uma lista dos usuários banidos do servidor.
        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao)
        })

    })
}

exports.help = {
    name: "ajuda",
    aliases: ['help']
}