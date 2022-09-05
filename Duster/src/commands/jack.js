const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jack')
        .setDescription('Jack-O character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Jack-O');
    },
};