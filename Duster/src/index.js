const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages
] });


client.once('ready', () => {
	console.log('Ready!');
});


client.login(token);
client.on('ready', () => {
    console.log('Logged in as Duster!');
})

client.on('message', msg => {
  if (msg.content.toLowerCase.includes('!test')) {
    msg.reply('https://www.dustloop.com/w/GGST/Testament');
    msg.channel.send('https://www.dustloop.com/w/GGST/Testament');
  }
});