const Discord = require('discord.js');const client = new Discord.Client();
client.on('ready', () => {  
  console.log('I am ready!');
});

client.on("message", (message) => {
  
  if (message.content.startsWith("/help")) {
    message.channel.send("Help is on the way~");
  } else

  if (message.content.startsWith("/invite")) {
    message.channel.send("https://discord.gg/v2wwYWE");
  }
});

client.login(process.env.BOT_TOKEN);
