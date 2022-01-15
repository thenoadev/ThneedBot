const { SlashCommandBuilder } = require(`@discordjs/builders`);
const Discord = require("discord.js");
const si = require(`systeminformation`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`sysinfo`)
    .setDescription(`Replies with the server hardware information!`),
  async execute(interaction) {
    try {
      const cpuData = await si.cpu();
      const osData = await si.osInfo();
      const memData = await si.mem();
      let cpuInfo = [
        cpuData.manufacturer,
        cpuData.brand,
        cpuData.speed,
        cpuData.cores,
      ];
      let osInfo = [osData.distro, osData.platform, osData.release];
      let memInfo = [memData.used, memData.total, memData.free];

      const infoEmbed = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setTitle(`Hardware Information`)
        .addField("Uptime", `${Math.floor(process.uptime() / 60)} mins`)
        .addFields(
          { name: `CPU`, value: `${cpuInfo[0]} ${cpuInfo[1]}`, inline: true },
          { name: `Speed`, value: `${cpuInfo[3]}c@${cpuInfo[2]} GHz`, inline: true },
        )
        .addFields({
          name: `Memory`,
          value: `${memInfo[0] / 1024 / 1024}MB/${
            memInfo[1] / 1024 / 1024
          }MB (${memInfo[2] / 1024 / 1024}MB Free)`,
        })
        .addFields(
          { name: `Distro`, value: `${osInfo[0]}`, inline: true },
          { name: `Platform`, value: `Linux`, inline: true },
          { name: `Release`, value: `Debian ${osInfo[2]}`, inline: true }
        );

      return interaction.editReply({ embeds: [infoEmbed] });
    } catch (e) {
      console.log(e);
    }
  },
};
