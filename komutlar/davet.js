const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
module.exports = {
  name: `davet`,
  description: "Davet Linkini Atar",
  execute(client, message) {
let prefix =  ayarlar.PREFIX
  message.channel.send(new Discord.MessageEmbed()
.setColor('GREEN') 
.setDescription(`:heart: • [Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=`+ client.user.id +`&scope=bot&permissions=8)`))    
}
}
