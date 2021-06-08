const Discord = require('discord.js');
const { config, token } = require('./config.json');
const client = new Discord.Client();

// your code here

client.on('ready', () => {
  console.log('Logged in: ${client.user.tag}');
});

client.login(config.token);
