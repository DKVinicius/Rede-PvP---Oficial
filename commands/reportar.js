const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
            return message.reply("Não foi possível encontrar essa pessoa!").then(m => m.delete(5000));

        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("Não é possível denunciar esse membro!").then(m => m.delete(5000));

        if (!args[1])
            return message.channel.send("Porfavor coloque um motivo para este report").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "reports")
            
        if (!channel)
            return message.channel.send("Não foi possível encontrar um canal de report").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Membro reportado", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**> Membro:** ${rMember} (${rMember.user.id})
            **> reportado por:** ${message.member}
            **> reportado em:** ${message.channel}
            **> Motivo:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}