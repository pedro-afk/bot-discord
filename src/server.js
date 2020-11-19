const Discord = require('discord.js');
const checkUserInput = require('./controllers/userInputController');

require('dotenv').config()

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot ready, ${client.user.tag}!`);
});

client.on('message', async(msg) => {
    const results = await checkUserInput(msg.content);
    console.log(results);
});

client.login(process.env.TOKEN);