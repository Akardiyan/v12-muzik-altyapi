const Discord = require('discord.js')
module.exports = {
  name: "devam", 
  description: "Duran Şarkıyı Devam Ettirir",
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
                     const müzix = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Devam Ettirilecek Bir Şarkı Yok**`)
    .setThumbnail(client.user.avatarURL)
                     
    if(!serverQueue) return message.channel.send(müzix)
                     const müzikxd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Durdurulaak Bir Şarkı Yok**`)
    .setThumbnail(client.user.avatarURL)
                     
    if(serverQueue.playing) return message.channel.send(müzikxd)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
                                const müzikqwe = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Şarkı Devam Ettirildi**`)
                                
  return message.channel.send(müzikqwe) 
 }
    
                     const müzikx = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Durdurulacak Bir Şarkı Yok**`)
    .setThumbnail(client.user.avatarURL)
                     
    message.channel.send(müzikx)
    
  }
}
