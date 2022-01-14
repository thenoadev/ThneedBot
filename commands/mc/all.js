const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("all")
    .setDescription(
      "Replies with all knows information about a Minecraft server!"
    )
    .addStringOption((option) =>
      option
        .setName("server")
        .setDescription("The server's adress")
        .setRequired(true)
    ),
  async execute(interaction) {
    const ipArg = interaction.options.getString("ip");
    try {
      let info = await fetch("https://api.mcsrvstat.us/2/" + ipArg).then(
        (res) => res.json()
      );

      const ping = await fetch(`https://api.minetools.eu/ping/${ipArg}/25565`)
        .then((res) => res.json())
        .then((json) => json.latency);

      const infoEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Help page")
        .setImage(`https://eu.mc-api.net/v3/server/favicon/${ipArg}`)
        .addField("IP", info.ip.toString())
        .addField("ONLINE", info.players.online.toString() + "/" + info.players.max.toString())
        .addField("PING", ping.toString() + " ms")

      return interaction.editReply({ embeds: [infoEmbed]});
    } catch (e) {
      const errorEmbed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Erreur")
        .addField(
          "An error occured",
          "Sadly, we didnt manage to get to the requested server. It either is off, or you dont have the correct adress. If you beleive this is not normal, please contact pocoyo#8008"
        )
        .setFooter("Made with love by Pocoyo", " ");
      return interaction.editReply({ embeds: [errorEmbed]});
    }
  },
};
