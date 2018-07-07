const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`WORLD IN WAR`);
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | You joined our server so we hope u have much fun:)!', `WELCOME TO OUR SERVER, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | You are now a member!', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

    channel.sendEmbed(embed);
});
bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});


bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has left the server', ';(')
        .addField('BYE BYE :(. :(', 'WE HOPE U WILL JOIN OUR SERVER AGAIN')
        .addField('Members', `${member.guild.memberCount}` + " Members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

    channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

bot.on("message",function(message) {
    if (message.content == "hello") {
        message.channel.sendMessage("HI, THERE");
    }
    });
 bot.on("message",function(message) {
    if (message.content == "hi") {
        message.channel.sendMessage("HI, THERE");
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
    var emebed = new Discord.RichEmbed()
    .addField("OUR DEVELOPER TEAM")
    .addField("▶ BOSS DEVELOPER:", "RIFT")
    .addField("▶ CEO:", "MrROUGHZ")
    .addField("▶ BUG FIXER etc.:", "LEON K")
    .addField("▶ SKIN+MAP DESIGNER:", "kaguya")
    .setColor(0xff0000)
   message.channel.sendEmbed(emebed);
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

    bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = '$';
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd === `${prefix}commands`) {
            message.channel.send("team,instagram,twitter,youtube,invite,studio");
        }
    });


bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;

        let prefix = '$';
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);

        if (cmd === `${prefix}donate`) {
            message.channel.send("https://www.patreon.com/worldinwar");
        }
    });
bot.login(process.env.token);
