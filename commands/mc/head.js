const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("head")
    .setDescription(
      "Replies with the user's head skin"
    )
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription("The user's username")
        .setRequired(true)
    ),
  async execute(interaction) {
    const ipArg = interaction.options.getString("username");
    try {
      let headEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Minecraft Head")
        .setImage(`https://cravatar.eu/helmhead/${ipArg}`)
        .setFooter("Made with love by Pocoyo", " ");

      return interaction.editReply({ embeds: [headEmbed] });
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
