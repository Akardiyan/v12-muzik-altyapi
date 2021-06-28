const Discord = require('discord.js')
module.exports = {
  name: "durdur",
  description: "Çalan Şarkıyı Durdurur",
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
                       const müzikqwe = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Durduralacak Bir Şarkı Yok**`)
    .setThumbnail(client.user.avatarURL)
                       
      return message.channel.send(müzikqwe);
    }
                     const müzikxd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Şarkı Zaten Durdurulmuş**`)
    .setThumbnail(client.user.avatarURL)
                     
    if(!serverQueue.playing) return message.channel.send(müzikxd)
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
                                      const müzikq = new Discord.MessageEmbed()
    .setColor(`GREEN`)
    .setDescription(`✅ | **Şarkı Durduruldu**`)
                                      
      return message.channel.send(müzikq)
  }  
  }
}
