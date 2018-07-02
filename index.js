const Discord = require('discord.js');const client = new Discord.Client();
client.on('ready', () => {  
  console.log('I am ready!');
});

client.on("message", (message) => {
  
  if (message.content.startsWith("/help")) {
    message.channel.send("Help is on the way~");
  }

  if (message.content.startsWith("/invite")) {
    message.channel.send("https://discord.gg/v2wwYWE");
  }
  if (message.content.startwith("/events"));
   message.channel.send("**Current Events related misfit are:**, 1.Team Extreme's 7th Birthday
  }
});

client.login(process.env.BOT_TOKEN);
