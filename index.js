const Discord = require('discord.js');
const {
	prefix,
	token,
} = require('./config.json');
const ytdl = require('ytdl-core');


// Grab token from config.json and create client and login
const client = new Discord.Client();
client.login(token);


// Listeners 
client.once('ready', () => {
    console.log('Bot is ready!');
   });
   client.once('reconnecting', () => {
    console.log('Reconnecting!');
   });
   client.once('disconnect', () => {
    console.log('Disconnect!');
   });



// Handle direct messages
client.on("message", function (message) {
    if (message.author.equals(client.user)) return; // Ignores itself
    if (message.channel.type === 'dm') return message.reply("https://media.giphy.com/media/l0K4mbH4lKBhAPFU4/giphy.gif"); // Placeholder response
  });