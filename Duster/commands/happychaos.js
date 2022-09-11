const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('happychaos')
        .setDescription('Happy Chaos character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Happy_Chaos');
    },
};