const discord = require("discord.js")
const clientz = new discord.Client();
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./ayarlar.json")


client.on("ready", () => {
  console.log(``+ client.user.id +` İD'si İle Discord'a Giriş Yapıldı`)
  client.user.setActivity(`${PREFIX}yardım`)
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();


const cmdFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "komutlar", file))
  client.commands.set(command.name, command)
} 


client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(PREFIX)) {
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { 
      client.commands.get(command).execute(client, message, args)
    } catch (err) { 
      console.log(err)
                                         const müzikxd = new discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`⛔ | **Bu Komutu Kullanırken Hata Alıyorum**`)
                                         
      message.channel.send(müzikxd)
    }
    
  }
  
  
});
client.login(process.env.token)
