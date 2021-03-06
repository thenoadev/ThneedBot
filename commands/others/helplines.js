const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("crisis")
    .setDescription("Need someone to call ?"),
  async execute(interaction) {
    try {
      const usEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Crisis lines")
        .addField("All Emergencies", "911")
        .addField("Mental Health", "1-800-950-6264", true)
        .addField("Self Harm", "1-800-3668-288", true)
        .addField("Alcohol & Drugs", "1-800-234-0420", true)
        .addField("Domestic Violence", "1-800-799-7233", true)
        .addField("Child Abuse", "1-800-540-4000", true)
        .addField("Rape", "1-800-656-HOPE", true)
        .addField("Suicide", "1-800-784-2433", true);
      const caEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle("Crisis lines")
        .addField("All Emergencies", "911")
        .addField("Physical/Mental Health", "811", true)
        .addField("Mental Health & Self Harm", "1-800-665-1822", true)
        .addField("Alcohol & Drugs", "1-855-885-4747", true)
        .addField("Domestic Violence", "1-604-875-0885", true)
        .addField("Child Abuse", "1-800-668-6868", true)
        .addField("Rape", "Covered by 911")
        .addField("Suicide", "1-833-456-4566 (CA) | 1-866-277-3553 (QC)", true);
      const otherEmbed = new Discord.MessageEmbed()
        .setTitle("Crisis lines")
        .setColor("#FF00FF")
        .addField(
          "Emergencies",
          "911 (America), 112 (Europe, Oceania), 999 (Asia and Africa)",
          true
        );
      return interaction.editReply({ embeds: [usEmbed, caEmbed, otherEmbed] });
    } catch (e) {
      console.log(e);
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
