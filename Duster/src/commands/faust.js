const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('faust')
        .setDescription('Faust character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Faust');
    },
};