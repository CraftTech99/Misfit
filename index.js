const Discord = require('discord.js');const client = new Discord.Client();
client.on('ready', () => {  
  console.log('I am ready!');
});

client.user.setstatus('online')
client.user.setPresence({ game: { name: 'Preparing to Breach in!', type: 0 } });

client.on("message", (message) => {
  
  if (message.content.startsWith("/help")) {
    message.channel.send("```Commands:``` /invite, /events");
  }

  if (message.content.startsWith("/invite")) {
    message.channel.send("https://discord.gg/v2wwYWE");
  }
  if (message.content.startsWith("/events")) {  
    message.channel.send("```Current Events related Misfit Are:``` , 1. Team Extreme's Birthday ");
  }
   if (message.content.startsWith("/1")) {  
    message.channel.send("Main Topic, DP, Pixel Art Build Battle, Maze, Horse Race, Trivia, Doms trivia, GiveAway, rafle");
  }
   if (message.content.startsWith("/maintopic")) {  
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/85258-te-7th-birthday/");
  }
  if (message.content.startsWith("/dp")) {  
    message.channel.send("No Thread for Drop Party created by event staff yet");
  }
   if (message.content.startsWith("/pixelartbuildbattle")) {  
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/85350-te-7th-birthday-pixelart-build-battle/");
  }
   if (message.content.startsWith("/maze")) {  
    message.channel.send("No thread for maze created by event staff yet");
  }
  if (message.content.startsWith("/horserace")) {  
    message.channel.send("No thread for horserace created by event staff yet");
  }
  if (message.content.startsWith("/trivia")) {  
    message.channel.send("No thread for trivia created by event staff yet");
  }
  if (message.content.startsWith("/domstrivia")) {  
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/88868-te-7th-birthday-trivia/");
  }
  if (message.content.startsWith("/giveaway")) {  
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/87017-te-7th-birthday-giveaway/");
  }
  if (message.content.startsWith("/rafle")) {  
    message.channel.send("https://forums.teamextrememc.com/index.php/topic/86329-te-7th-birthday-raffle/");
  }
});

client.login(process.env.BOT_TOKEN);
