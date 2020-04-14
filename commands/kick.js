const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kicks the member",
    usage: "<id | mention>",
    run: async (client, message, args) => {
        const logChannel = message.guild.channels.find(c => c.name === "punições") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Porfavor mencione uma pessoa para eu kickar.")
                .then(m => m.delete(5000));
        }

        // No reason
        if (!args[1]) {
            return message.reply("Porfavor de um motivo para eu kickar esta pessoa.")
                .then(m => m.delete(5000));
        }

        // No author permissions
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ Você não tem permissão para kickar pessoas")
                .then(m => m.delete(5000));
        }

        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ Eu não tenho permissão para kickar pessoas.")
                .then(m => m.delete(5000));
        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toKick) {
            return message.reply("Não pude achar esta pessoa,tente novamente!")
                .then(m => m.delete(5000));
        }

        // Can't kick urself
        if (toKick.id === message.author.id) {
            return message.reply("Você não pode se auto-kickar...")
                .then(m => m.delete(5000));
        }

        // Check if the user's kickable
        if (!toKick.kickable) {
            return message.reply("Eu não pude kick essa pessoa devido à hierarquia de papéis, suponho.")
                .then(m => m.delete(5000));
        }
                
        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setThumbnail(toKick.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- membro kickado:** ${toKick} (${toKick.id})
            **- kickado por:** ${message.member} (${message.member.id})
            **- Motivo:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new RichEmbed()
            .setColor("GREEN")
            .setAuthor(`Essa verificação é invalida apos 30s.`)
            .setDescription(`Você deseja kickar ${toKick}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reaction collector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // The verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`É... o ban deu erro devido ao  erro ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Kick canceled.`)
                    .then(m => m.delete(10000));
            }
        });
    }
};