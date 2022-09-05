const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gio')
        .setDescription('Giovanna character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Giovanna');
    },
};