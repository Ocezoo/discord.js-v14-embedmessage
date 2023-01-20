const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data : new SlashCommandBuilder()
    .setName('embed')
    .setDescription('To jest testowa komenda'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle(`Siemano`)
        .setDescription(`Tak`)
        .setColor(0x006c7b)

        await interaction.reply({ embeds: [embed] });
    },
};