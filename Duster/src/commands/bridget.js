const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bridget')
        .setDescription('Bridget character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Bridget');
    },
};