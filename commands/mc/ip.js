const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ip")
    .setDescription("Replies with the server's direct IP adress!")
    .addStringOption((option) =>
      option
        .setName("server")
        .setDescription("The server's adress")
        .setRequired(true)
    ),
  async execute(interaction) {
    const server = interaction.options.getString("server");
    try {
      let ip = await fetch("https://api.mcsrvstat.us/2/" + server)
        .then((res) => res.json())
        .then((json) => json.ip);

      const ipEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setImage(`https://eu.mc-api.net/v3/server/favicon/${server}`)
        .addField("IP", ip)
        .setFooter("Made with love by Pocoyo", " ");

        return interaction.editReply({ embeds: [ipEmbed] });
      } catch (e) {
      const errorEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Erreur")
        .addField(
          "An error occured",
          "Sadly, we didnt manage to get to the requested server. It either is off, or you dont have the correct adress. If you beleive this is not normal, please contact pocoyo#8008"
        )
        .setFooter("Made with love by Pocoyo", " ");
        return interaction.editReply({ embeds: [errorEmbed] });
      }
  },
};
