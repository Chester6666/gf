const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yeterli yetkin bulunmamakta!');

    if (!args[0]) return message.reply(`aç/kapat`);

    if (args[0] == 'aç') {
        var durum = await db.fetch(`reklam_${message.guild.id}`)            
        if (durum == "acik") return message.channel.send("Bu özellik önceden aktif hale getirilmiş.");
        db.set(`reklam_${message.guild.id}`, 'acik')
        message.channel.send(`açık!`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`reklam_${message.guild.id}`)            
        if (durum == "kapali") return message.channel.send("Bu özellik önceden kapatılmış.");
        db.set(`reklam_${message.guild.id}`, 'kapali')
        message.channel.send(`kapalı!`)
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'Reklam engeller.',
  usage: '!reklam-engel'
};