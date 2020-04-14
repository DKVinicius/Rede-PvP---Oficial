exports.run = (client, message) => {
  var owner = "242263403001937920"
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Tem que mencionar alguem para dar um soco.')
        if(user.id === owner){
          return message.reply("You can't hurt him you pleblord.");
  }else{
          message.reply('Você levou um soco do(a) <@' + user.id + '>')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch',
  description: 'De um soco em alguem.',
  usage: 'punch <user>'
};
