const Discord = require('discord.js');
const prefix = process.env.BOT_PREFIX
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('ready', () => {
        client.user.setGame('Preparing to Breach in!');
    });
client.on("message", (message) => {

  if (message.content.startsWith(`${prefix}help`)) {
    message.channel.send("```Commands:``` /invite, /events");
  }

  if (message.content.startsWith(`${prefix}invite`)) {
    message.channel.send("https://discord.gg/v2wwYWE");
  }
  if (message.content.startsWith(`${prefix}events`)) {
    message.channel.send("```Current Events related Misfit Are:``` , 1. Team Extreme's Birthday ");
  }
   if (message.content.startsWith(`${prefix}1`)) {
    message.channel.send("Main Topic, DP, Pixel Art Build Battle, Maze, Horse Race, Trivia, Doms trivia, GiveAway, rafle");
  }
   if (message.content.startsWith(`${prefix}maintopic`)) {
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/85258-te-7th-birthday/");
  }
  if (message.content.startsWith(`${prefix}dp`)) {
    message.channel.send("No Thread for Drop Party created by event staff yet");
  }
   if (message.content.startsWith(`${prefix}pixelartbuildbattle`)) {
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/85350-te-7th-birthday-pixelart-build-battle/");
  }
   if (message.content.startsWith(`${prefix}maze`)) {
    message.channel.send("No thread for maze created by event staff yet");
  }
  if (message.content.startsWith(`${prefix}horserace`)) {
    message.channel.send("No thread for horserace created by event staff yet");
  }
  if (message.content.startsWith(`${prefix}trivia`)) {
    message.channel.send("No thread for trivia created by event staff yet");
  }
  if (message.content.startsWith(`${prefix}domstrivia`)) {
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/88868-te-7th-birthday-trivia/");
  }
  if (message.content.startsWith(`${prefix}giveaway`)) {
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/87017-te-7th-birthday-giveaway/");
  }
  if (message.content.startsWith(`${prefix}rafle`)) {
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/86329-te-7th-birthday-raffle/");
  }

  if (cmd === `${prefix}botinfo`) {

    let botembed = new Discord.RichEmbed ()
    .setDescription ("Bot Information")
    .setColor("#118e34")
    .addfield("Bot Name", bot.user.username);

    return message.channel.send (botembed);
  }


});
