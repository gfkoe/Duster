require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const TOKEN = process.env.TOKEN;


const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

client.once('ready', () => {
	console.log('Ready!');
});


client.login(TOKEN);
client.on('ready', () => {
    console.log('Logged in as Duster!');
})

client.on('message', msg => {
  if (msg.content.toLowerCase.includes('!test')) {
    msg.reply('https://www.dustloop.com/w/GGST/Testament');
    msg.channel.send('https://www.dustloop.com/w/GGST/Testament');
  }
});