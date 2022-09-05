const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ky')
        .setDescription('Ky Kiske character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Ky_Kiske');
    },
};