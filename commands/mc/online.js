const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("online")
    .setDescription(
      "Replies with the number of connected players on the server!"
    )
    .addStringOption((option) =>
      option.setName("server").setDescription("The server's adress").setRequired(true)
    ),
  async execute(interaction) {
    const server = interaction.options.getString("server");
    try {
      const onlineNow = await fetch(
        "https://mcapi.xdefcon.com/server/" + server + "/full/json"
      )
        .then((res) => res.json())
        .then((json) => json.players);

      const onlineMax = await fetch(
        "https://mcapi.xdefcon.com/server/" + server + "/full/json"
      )
        .then((res) => res.json())
        .then((json) => json.maxplayers);

      // Embed Message
      const onlineEmbed = new Discord.MessageEmbed()
        .setImage(`https://eu.mc-api.net/v3/server/favicon/${server}`)
        .setColor("#FF00FF")
        .addField(
          "Players online",
          `${onlineNow}/${onlineMax} players are online on ` + server
        )
        .setFooter("Made with love by Pocoyo", " ");

        return interaction.editReply({ embeds: [onlineEmbed] });
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
