const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu komutu kullanabilmek için öncelikle yetkin olmalı!");
if(!args[0]) return message.channel.send("Lütfen silinecek mesaj miktarını yazınız.");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Başarıyla \`${args[0]}\` tane mesajı sildim!`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};