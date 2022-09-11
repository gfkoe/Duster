const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Testament character page'),
    async execute(interaction) {
        await interaction.reply('https://www.dustloop.com/w/GGST/Testament');
    },
};
