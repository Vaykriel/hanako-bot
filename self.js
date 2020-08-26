const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'So') {
  msg.channel.startTyping();
  }
});
client.login('NDQxNDgyNzIwMTUzOTYwNDQ5.XhGLHg.mHCYB2ZCzO5u1WXtin8U8iRYpS4');