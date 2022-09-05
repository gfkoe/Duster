const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('baiken')
        .setDescription('Baiken character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Baiken');
    },
};