const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skin")
    .setDescription("Replies with the user's skin!")
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("The user's username")
        .setRequired(true)
    ),
  async execute(interaction) {
    const username = interaction.options.getString("username");
    try {
      let skinEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Skin Minecraft")
        .setImage(`https://cravatar.eu/3d/${username}/250`)
        .setFooter("Made with love by Pocoyo", " ");

      return interaction.editReply({ embeds: [skinEmbed] });
    } catch (e) {
      const errorEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Erreur")
        .addField(
          "An error occured",
          "Sadly, we didnt manage to get to the requested server. It either is off, or you dont have the correct username. If you beleive this is not normal, please contact pocoyo#8008"
        )
        .setFooter("Made with love by Pocoyo", " ");
      return interaction.editReply({ embeds: [errorEmbed] });
    }
  },
};
