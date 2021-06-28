const Discord = require('discord.js')
module.exports = {
  name: "döngü",
  description: "Sıraya Döngü Ekler",
  execute (client, message, args) {
    
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
                const müzixd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Döngüye Alınacak Bir Şarkı Yok**`)
    .setThumbnail(client.user.avatarURL)
                
      return message.channel.send("Döngüye alabileceğim bir şarkı bulamadım.");
    }
    

    serverQueue.loop = !serverQueue.loop
    
    
                                    const müzikqwe = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Döngü ${serverQueue.loop ? "Aktif" : "Deaktif"} Edildi**`)
                                    
    message.channel.send(müzikqwe)
    
    
    
    
  }
}
