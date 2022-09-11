const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('zato')
        .setDescription('Zato-1 character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Zato-1');
    },
};