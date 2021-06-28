const { Util } = require("discord.js");
const api = (process.env.api);
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(api);
const Discord = require('discord.js')
const { play } = require("../ana/müzik.js") 
module.exports = {
  name: "oynat",
  description: "Şarkı Dinlersiniz",
  async execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
           
                 const müziksj = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu Komutu Kullanabilmek İçin Bir Ses Kanalına Girmelisin**`)
    .setThumbnail(client.user.avatarURL)
                 
      return message.channel.send(müziksj);
    }

    if (!args.length) {

                       const müzikxd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Lütfen Bir Link Veya Şarkı İsmi Gir**`)
    .setThumbnail(client.user.avatarURL)
                       
      return message.channel.send(müzikxd);
    }


    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      
                               const müzikqwe = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Oynatma Listesi Oynatılamıyor**`)
                               
      return message.channel.send(müzikqwe);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songData = null;
    let song = null;

    if (urlcheck) {
      try {
         
         const result = await youtube.searchVideos(args[0], 1)
        
                                  const müzikas = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Link Geçerli Değil**`)
                                
         if(!result[0]) return message.channel.send(müzikas)
        songData = await ytdl.getInfo(result[0].url,{});
       
        console.log(songData)
        song = {
           title: songData.videoDetails.title,
           url: songData.videoDetails.video_url,
           duration: songData.videoDetails.lengthSeconds,
           thumbnail : songData.videoDetails.thumbnails[0].url,
           author : songData.videoDetails.author.name,
           wiews : songData.videoDetails.viewCount,
          likes : {
          trues : songData.videoDetails.likes.toLocaleString(),
          falses :songData.videoDetails.dislikes.toLocaleString()
         }
        };
   

      } catch (error) {
        if (message.include === "copyright") {
          return message
                                   const müzikxd = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu Şarkı Telif Hakkı Nedeni İle Oynatılamıyor**`)
                                   
            .send(müzikxd)
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
         const result = await youtube.searchVideos(targetsong, 1)
         
                                  const müziksa = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Arama Sonucu Bulunamadı**`)
                                  
        if(!result[0]) return message.channel.send(müziksa)
        songData = await ytdl.getInfo(result[0].url)
         song = {
           title: songData.videoDetails.title,
           url: songData.videoDetails.video_url,
           duration: songData.videoDetails.lengthSeconds,
           thumbnail : songData.videoDetails.thumbnails[0].url,
           author : songData.videoDetails.author.name,
           wiews : songData.videoDetails.viewCount,
          likes : {
          trues : songData.videoDetails.likes.toLocaleString(),
          falses :songData.videoDetails.dislikes.toLocaleString()
         }
  
        };

      } catch (error) {
        console.error(error)
      }
    }
    
    if(serverQueue) {
      serverQueue.songs.push(song)
      return serverQueue.textChannel.send( new Discord.MessageEmbed()
        .setDescription(`<@`+ message.author.id + `> Sıraya Ekledi --> [`+ song.title +`](`+ song.url +`)`,message.author.avatarURL({format : "png",dynamic : true})))
      .catch(console.error)
    } else {
      queueConstruct.songs.push(song);
    }
    
    if(!serverQueue) message.client.queue.set(message.guild.id, queueConstruct)
    
     if (!serverQueue) {
      try {
    
        queueConstruct.connection = await channel.join();
        play(song, message)
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send({embed: {"description": `Kanala giriş yapamıyorum.: ${error}`, "color": "#ff2050"}}).catch(console.error);
      }
    }
    
    
  }
};
  