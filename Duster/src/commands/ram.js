const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ram')
        .setDescription('Ramlethal Valentine character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Ramlethal_Valentine');
    },
};