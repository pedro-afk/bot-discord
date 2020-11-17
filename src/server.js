const Discord = require('discord.js');

require('dotenv').config()

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot ready, ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!gs') {
        msg.reply('Pong!');
    }
});

client.login(process.env.TOKEN);