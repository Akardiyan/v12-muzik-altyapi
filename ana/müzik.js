const ytdlDiscord = require("ytdl-core-discord");
const Discord = require('discord.js')
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
    const müziksj = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Şarkı Sırası Sona Erdi**`)
      return queue.textChannel.send(müziksj).catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
                         const müzikxd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu Şarkı Telif Hakkı Nedeni İle Oynatılamıyor**`)
                         
        return message.channel.send(müzikxd)
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //sesi buradan arttırırsınız
    
    
    
      queue.textChannel.send(
        new Discord.MessageEmbed()
        .setAuthor(`Şuan Çalıyor`,message.author.avatarURL({format : "png",dynamic : true}))
        .setTitle(song.title)
        .setURL(song.url)
        .setDescription(`**Sıraya Ekleyen** =>  <@`+ message.author.id +`>`)
        .setThumbnail(song.thumbnail)
        .addField('Yayıncı',song.author)
        .addField('Uzunluk',``+ song.duration +` Saniye`)
        .addField('İzlenme',song.wiews.toLocaleString())
        .addField('Beğeni Sayısı',``+ song.likes.trues +` 👍`)
        .addField('Beğenmeme Sayısı',``+ song.likes.falses +` 👎`))
    
    
  }
}
