const Discord = require('discord.js')
module.exports = {
  name: "atla",
  description: "Mevcut Şarkıyı Geçer",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
  
                 const müziksj = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu Komutu Kullanabilmek İçin Bir Ses Kanalına Girmelisin**`)
    .setThumbnail(client.user.avatarURL)
                 
      return message.channel.send(müziksj);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      
                               const müzikxd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Sırada Başka Şarkı Yok**`)
                               
      return message.channel.send(müzikxd);
    }

    serverQueue.connection.dispatcher.end();
    
                             const müzikqwe = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Şarkı Geçildi**`)
                             
    message.channel.send(müzikqwe);
  }
};
