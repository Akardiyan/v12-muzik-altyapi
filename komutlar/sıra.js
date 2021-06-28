const Discord = require('discord.js')
module.exports = {
  name: "sıra",
  description: "Mevcut Sırayı Gösterir",
  execute: (client, message, args) => {
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
    .setDescription(`⛔ | **Sırada Şarkı Yok**`)
    .setThumbnail(client.user.avatarURL)
                       
      return message.channel.send(müzikxd);
    }

                     const müzikassa = new Discord.MessageEmbed()
    .setDescription(`${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true })
                     
    message.channel.send(müzikassa);
  }
};
