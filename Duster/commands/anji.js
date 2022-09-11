const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anjimito')
        .setDescription('Anji Mito character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Anji_Mito');
    },
};