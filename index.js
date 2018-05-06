const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`WORLD IN WAR`);
});


bot.on("message",function(message) {
    if (message.content == "hello") {
        message.channel.sendMessage("HELLO, THERE");
    }
    });

    bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = '$';
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd === `${prefix}youtube`) {
            message.channel.send("https://www.youtube.com/channel/UC00U2crvBmhXNu9pmQRhH3g");
        }

    });

    bot.on("message", async message => {

                if (message.author.bot) return;
                if (message.channel.type === "dm") return;

                let prefix = '$';
                let messageArray = message.content.split(" ");
                let cmd = messageArray[0];
                let args = messageArray.slice(1);

                if (cmd === `${prefix}studio`) {
                    message.channel.send("RITEX STUDIO");
                }
            });

    bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = '$';
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd === `${prefix}twitter`) {
            message.channel.send("https://twitter.com/World_inWar?s=9");
        }
    });
    
    bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = '$';
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd === `${prefix}team`) {
            message.channel.send("RIFT HD: BOSS DEVELOPER AND MAIN OWNER OF THIS GAME; LEON: BUG FIXER AND MODELING DEVELOPER; MR.ROUGHZ CODER AND BUG FIXER; MIKEX: COMMUNITY MANAGER AND MOD");
        }
    });

    bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = '$';
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd === `${prefix}instagram`) {
            message.channel.send("https://www.instagram.com/worldinwargame/");
        }
    });

    bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = '$';
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd === `${prefix}invite`) {
            message.channel.send("https://discordapp.com/invite/GNEz66a");
        }
    });

bot.login(process.env.token);
