const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('millia')
        .setDescription('JMillia character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Millia_Rage');
    },
};