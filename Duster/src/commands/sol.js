const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sol')
        .setDescription('Sol Badguy character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Sol_Badguy');
    },
};