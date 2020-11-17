const Discord = require('discord.js');
require('dotenv').config()

const client = new Discord.Client();

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(
        ch => ch.name === 'member-log'
    );
    if (channel) return;
    channel.send(`Seja bem vindo ao server, ${member}`);
});

client.on('ready', () => {
    console.log(`Bot ready, ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pong!');
    } else if (msg.content == '!ola' || msg.content == '!oi') {
        msg.reply(`Olá, como vai?`);
    } else if (msg.content === '!avatar') {
        msg.reply(msg.author.displayAvatarURL());
    } else if (msg.content === '!rip') {
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        msg.channel.send(`${msg.author},`, attachment);
    }
});

client.login(process.env.TOKEN);