const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

// your code here

bot.login(config.token);
