require('dotenv').config();
const Discord = { Client, GatewayIntentBits } = require('discord.js');

const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

const TOKEN = process.env.TOKEN;
client.login(TOKEN);
client.on('ready', () => {
    console.log('Logged in as Duster!');
})

