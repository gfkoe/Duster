const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leo')
        .setDescription('Leo WhiteFang character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Leo_Whitefang');
    },
};