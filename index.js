const Discord = require("discord.js");
const pridebot = new Discord.Client();
const config = require("./config.json");

pridebot.on('ready', () => {
  console.log(`Bot has started, with ${pridebot.users.size} users, in ${pridebot.channels.size} channels of ${pridebot.guilds.size} guilds.`);
  console.log(`Logged in as ${pridebot.user.tag}!`);
  console.log(`PrideBot is online`);

pridebot.user.setGame(`pc.h Currently in ${pridebot.guilds.size} Servers`);
});
 // Prefix settings
pridebot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);
  // Add Command
  if (command === "add") {
    let numArry = args.map(n=> parseInt(n));
    let total = numArry.reduce( (p, c) => p+c);

    message.channel.sendMessage(total);

  }
     // list of shit
  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }
  
  if (command === "website") {
    message.channel.sendMessage("Website: (soon)");
  }
 
  if (command === "info") {
    message.channel.sendMessage("pc.serverinfo | Adding soon |");
  }
  // Shows persons profile picture
  if (command === "avatar") {
    message.reply(message.author.avatarURL);
  }
  
  if (command === "support") {
    message.author.sendMessage("Join for support: (soon)");
  }
  
  if (command === "invite") {
    message.author.sendMessage("https://discordapp.com/oauth2/authorize?client_id=371044552183906305&scope=bot&permissions=0");
    message.reply("Adding me to another server ? Make sure to pass it on <3");
  }
  // Working ping code
  if (command === "ping") {
     let modRole = message.guild.roles.find("name", "BotTrusted");
     if(message.member.roles.has(modRole.id)) {
      message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
     } else {
      message.reply("Need a role created called (BotTrusted) and have it assigned to you!")
    }
  }
  
});
// Token for bot to run
pridebot.login(process.env.BOT_TOKEN);
