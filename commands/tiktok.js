// 0a103a99e45400496ce93aff4f3bec03

const Discord = require("discord.js");
const fetch = require("node-fetch");
const { SlashCommandBuilder } = require("@discordjs/builders");
const TikTokScraper = require("tiktok-scraper");
let request = require("request-promise");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tiktok")
    .setDescription("Literally does nothing. Nothing to be seen here!"),
  async execute(interaction) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
