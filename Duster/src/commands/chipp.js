const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chipp')
        .setDescription('Chipp Zanuff character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Chipp_Zanuff');
    },
};