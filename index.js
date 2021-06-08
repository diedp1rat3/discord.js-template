const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

// your code here

client.on('ready', () => {
  console.log('Logged in: ${client.user.tag}');
});

bot.login(config.token);
