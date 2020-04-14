Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Usuário avisado:", `<@${wUser.id}>`)
  .addField("Avisado em:", message.channel)
  .addField("Numero de avisos:", warns[wUser.id].warns)
  .addField("Motivo:", reason);

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.reply("Não foi possível encontrar o canal");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "Mutado");
    if(!muterole) return message.reply("Você deve criar esse papel, cara.");

    let mutetime = "10s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> foi temporariamente mutado`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> foi desmutado.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> foi banido!.`)
  }

}

module.exports.help = {
  name: "warn"
}