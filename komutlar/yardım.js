const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "Tüm Komutları Gösterir",
  execute(client, message) {
let prefix =  ayarlar.PREFIX
  message.channel.send(new Discord.MessageEmbed()
.setColor('GREEN') 
.setAuthor(``+ client.user.name +` Yardım Menüsü`, client.user.avatarURL())
.setDescription(`:bangbang: Davet Etmek İçin \`${prefix}davet\` Yazman Yeterli :bangbang:`)
.addField(`__Döngü__`,`\`${prefix}döngü\`\n Şarkılara Döngü Ekler`)
.addField(`__Durdur__`,`\`${prefix}durdur\`\n Oynatılan Şarkıyı Durdurur`)
.addField(`__Oynat__`,`\`${prefix}oynat\`\n Sıraya Şarkı Eklersiniz Eğer Sıra Yoksa Sadece Dinlersiniz`)
.addField(`__Sıra__`,`\`${prefix}sıra\`\n Mevcut Sırayı Gösterir`)
.addField(`__Devam Et__`,`\`${prefix}devam\`\n Durdurulan Şarkıyı Devam Etirir`)
.addField(`__Atla__`,`\`${prefix}atla\`\n Sıraya Eklenmiş Sonraki Şarkıyı Açar Şarkı Yoksa Mevcut Şarkıyı Bitirir`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL))    
}
}
