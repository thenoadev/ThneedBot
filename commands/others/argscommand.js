const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bpa")
    .setDescription(
      "Literally does nothing. Nothing to be seen here!"
    )
    .addStringOption((option) =>
      option
        .setName("arg")
        .setDescription("Argument")
        .setRequired(true)
    ),
  async execute(interaction) {
    const arg = interaction.options.getString("arg");
  },
};
