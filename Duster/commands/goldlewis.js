const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('goldlewis')
        .setDescription('Goldlewis Dickinson character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Goldlewis_Dickinson');
    },
};