const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`WORLD IN WAR`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '+';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}youtube`){
    message.channel.send("https://www.youtube.com/channel/UC00U2crvBmhXNu9pmQRhH3g");
  });
  bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return

  if (cmd === `${prefix}youttube`){
    message.channel.send("thttps://www.youtube.com/channel/UC00U2crvBmhXNu9pmQRhH3g");
  }
  
});

bot.login(process.env.token);
