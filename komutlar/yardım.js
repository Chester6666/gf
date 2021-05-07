const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Moderasyon Bot Komut Sistemleri")
    .setTimestamp()
    .addField("➥ !ban", " İstediğiniz Kullanıcıyı Banlamanızı Sağlar.")
    .addField("➥ !kick ", "Kullanıcıyı Kicklemenizi Sağlar.")
    .addField("➥ !jail-kanal", "Jail Kanalı Ayarlar.")
    .addField("➥ !jail-yetkilisi", "Jail Yetkilisini Ayarlar.")
    .addField("➥ !jail-rol", "Jail Rolünü Ayarlar.")
    .addField("➥ !jail ", "Kullanıcıyı Jaile Atmayı Sağlar.")
    .addField("➥ !link-engel ", "Link Engellemeyi Açar.")
    .addField("➥ !mod-log-ayarla ", "Mod Log Kanalı Belirler.")
    .addField("➥ !reklam-engel ", "Reklam Engellemeyi Açar.")
    .addField("➥ !yavaş-mod ", "Yazı Yazma Süresini Ayarlar.")
    .addField("➥ !temizle ", "Belirtilen Sayı Kadar Mesaj Siler.")
    .addField("➥ !mute ", "belirttiğiniz kişiyi süreli olarak susturur.")

    .setFooter("Youtube Matthe", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
