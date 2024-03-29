const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

var mutelirolu = "Muted"

module.exports.run = async (bot, message, args) => {
      if (!message.member.hasPermissions ('MANAGE_MESSAGES')) return message.channel.send("Yapmak İçin Kick Members Yetkisine Sahip Olmalısın.")

  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply(`Lütfen bir kullanıcı etiketleyiniz!`)
  if(mutekisi.hasPermission("MANAGE_MESSAGES")) return message.reply(`Yetkili bir kişiyi muteleyemem!`)
  let muterol = message.guild.roles.find(`name`, mutelirolu);
  if(!muterol){
    try{
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
  .replace(`sn`, `s`)
  .replace(`dk`, `m`)
  .replace(`sa`, `h`)
  .replace(`g`, `d`)

  if(!mutezaman) return message.reply(`Lütfen bir zaman dilimi giriniz! \nDoğru Kullanım; \`${prefix}mute <@kullanıcı> <1sn/1dk/1sa/1g>\``)

  await(mutekisi.addRole(muterol.id));
  message.reply(`<@${mutekisi.id}> kullanıcısını \`${args[1]}\` süresi boyunca muteledi!`);

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`<@${mutekisi.id}> kullanıcısının mutelenme süresi sona erdi!`);
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "mute",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
    usage: "mute <@kullanıcı> <1sn/1dk/1sa/1g>"
  };