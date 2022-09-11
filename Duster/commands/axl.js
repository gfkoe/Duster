const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('axllow')
        .setDescription('Axl Low character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Axl_Low');
    },
};