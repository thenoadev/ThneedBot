const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("crisis")
    .setDescription("Need someone to call ?")
    .addStringOption((option) =>
      option
        .setName("country")
        .setDescription("2 letter country code")
        .addChoice('United States', 'us')
        .addChoice('Canada', 'ca')
        .addChoice('Other', 'other')
        .setRequired(true)
    ),
  async execute(interaction) {
    const country = interaction.options.getString("country");
    try {
      const usEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Crisis lines")
        .addField("All Emergencies", "911")
        .addField("Mental Health", "1-800-950-6264", true)
        .addField("Self Harm", "1-800-3668-288", true)
        .addField("", "")
        .addField("Alcohol & Drugs", "1-800-234-0420", true)
        .addField("Domestic Violence", "1-800-799-7233", true)
        .addField("Child Abuse", "1-800-540-4000")
        .addField("Rape", "1-800-656-HOPE")
        .addField("", "")
        .addField("Suicide", "1-800-784-2433");
      const caEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Crisis lines")
        .addField("All Emergencies", "911")
        .addField("Physical Health", "811", true)
        .addField("Self Harm", "1-800-665-1822", true)
        .addField("", "")
        .addField("Alcohol & Drugs", "1-855-885-4747", true)
        .addField("Domestic Violence", "1-604-875-0885", true)
        .addField("Child Abuse", "1-800-668-6868")
        .addField("", "")
        .addField("Suicide", "1-833-456-4566 (CA) | 1-866-277-3553 (QC)");
      const otherEmbed = new Discord.MessageEmbed()
        .setTitle("Crisis lines")
        .addField(
          "Emergencies",
          "911 (America), 112 (Europe, Oceania), 999 (Asia and Africa)",
          true
        );
      if (country == "us") {
        return interaction.editReply({ embeds: [usEmbed] });
      } else if (country == "ca") {
        return interaction.editReply({ embeds: [caEmbed] });
      } else {
        return interaction.editReply({ embeds: [otherEmbed] });
      }
    } catch (e) {
      const otherEmbed = new Discord.MessageEmbed()
        .setTitle("Crisis lines - Error")
        .addField(
          "Emergencies",
          "911 (America), 112 (Europe, Oceania), 999 (Asia and Africa)",
          true
        );
      return interaction.editReply({ embeds: [otherEmbed] });
    }
  },
};
