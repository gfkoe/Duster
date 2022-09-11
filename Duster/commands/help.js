const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists commands'),
    async execute(interaction) {
        await interaction.reply('anjimito, axllow, baiken, bridget, chipp, faust, gio, goldlewis, happychaos, i-no, jack-o, ky, leo, may, millia, nago, pot, ram, sol, test, zato');
        
    },
};