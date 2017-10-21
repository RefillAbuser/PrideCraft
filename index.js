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
  
  if (command === "h") {
    message.author.sendMessage("List of commands:");
    message.author.sendMessage("``pc.say (Says what you tell it to.)``");
    message.author.sendMessage("``pc.info (updates pretty much.)``");
    message.author.sendMessage("``pc.website (Says the website of pridecraft.)``");
    message.author.sendMessage("``pc.avatar (Posts a pic of your profile pic.)``");
    message.author.sendMessage("``pc.invite (Join my home discord server!)``");
    message.author.sendMessage("``pc.ping (Shows how fast the bot is.)``");
    message.reply("I'm sending you the help list right now!");
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
      message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
  
});
// Token for bot to run
pridebot.login(process.env.BOT_TOKEN);
