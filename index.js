

const Discord = require('discord.js');
const config = require('./config.json');


const client = new Discord.Client()
client.prefix = config.prefix;


client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
    return message.reply("<a:sino:694939653962465291> Olá, meu nome é **Rede Empire | Bot Oficial** e eu sou bot oficial da **Rede Empire | Minecraft Server **,meu prefixo é ```/ meu comando de ajuda é /ajuda``` e o meu criador é o <@563113487073804293> <a:sino:694939653962465291>  ")}
    if(!message.content.startsWith(config.prefix)) return;
           

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }

// Initialize the invite cache
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  // "ready" isn't really ready. We need to wait a spell.
  wait(1000);

  // Load all invites for all guilds and save them to the cache.
  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});  

})
   



client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

    client.on("guildMemberAdd", member => {
      if(member.guild.id =! ("693149240519688222") )return;
    member.addRole("693891443839860756")
  
  
        const embed = new Discord.RichEmbed()
        .setTitle(member.user.tag + 'Bem Vindo!')
        .setDescription("Olá, seja muitob bem-vindo(a)" + member.guild.name + "!")
        .addField (`chat de regras: <#693879371328520262>`, `<a:ban_hammer:697039725365821480> leia as regras para evitar ser punido`)
        .addField(`<a:staff:697063539411648513> se tiver duvidas crie um ticket `, `contacte um staff no privado`)
        .addField(`se quiser conversar com o dono do bot e adquirir o seu é so entrar neste servidor`, `[**CLIQUE AQUI**](https://discord.gg/JgZ9Un)`)
        .setThumbnail(member.user.avatarURL)
        .setColor("#ff6960")
        member.guild.channels.get('693888484485890109').send(member + "");
        member.guild.channels.get('693888484485890109').send(embed);
    })       

    client.user.setPresence({ game: { name: 'no Rede Empire !', type: 0, url: 'https://www.twitch.tv/pedroricardo'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo

}); 

client.login(config.token);