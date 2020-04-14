const Discord = require('discord.js')

exports.run = async (client, message) => {
    
    const m = await message.channel.send('Gerando invite ***...***')
    m.edit('Gerando invite ***.....***')
    m.edit('Gerando invite ***..........***')
    m.edit('Gerando invite ***................***')
    
    message.channel.send('Convite Gerado!')
    message.channel.createInvite({ temporary: false, reason: 'Just testing' }).then(invite =>
    message.channel.send(invite.url)
)
}