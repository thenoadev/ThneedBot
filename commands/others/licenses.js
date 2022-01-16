const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('licenses')
		.setDescription('Replies with all licenses used by the bot!'),
	async execute(interaction) {
        const licenseEmbed = new MessageEmbed()
            .setTitle('Licenses')
            .setURL('https://github.com/Pocoyo-dev/ThneedBot/COPYRIGHT.md')
        return interaction.editReply({ embeds: [licenseEmbed]});
	},
};