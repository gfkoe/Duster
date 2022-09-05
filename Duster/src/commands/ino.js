const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('i-no')
        .setDescription('I-No character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/I-No');
    },
};