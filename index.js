const fs = require("fs");
const { Client, Collection, Intents } = require("discord.js");
const { token } = require("./config.json");
require('emoji-log');
const timer = require(`@calipsa/timer`);

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
const commandFilesMC = fs
  .readdirSync("./commands/mc")
  .filter((file) => file.endsWith(".js"));
const commandFilesOther = fs
  .readdirSync("./commands/others")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}
for (const file of commandFilesMC) {
  const command = require(`./commands/mc/${file}`);
  client.commands.set(command.data.name, command);
}
for (const file of commandFilesOther) {
  const command = require(`./commands/others/${file}`);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  let end1 = timer();

  const command = client.commands.get(interaction.commandName);

  if (!command) return;
  let duration1 = end1();
  try {
    await interaction.deferReply();
    await command.execute(interaction);
    duration1 = duration1 * 1000;
    duration1 = Math.round(duration1);
    duration1 = duration1 + 1;
    duration1 = duration1 / 1000;
    console.emoji(`✅ `, `${interaction.commandName} took ${duration1} ms to execute` )
  } catch(e) {
    duration1 = duration1 * 1000;
    duration1 = Math.round(duration1);
    duration1 = duration1 + 1;
    duration1 = duration1 / 1000;
    console.log(e);
    console.emoji(`🔥 `, `${interaction.commandName} failed to execute. Took ${duration1} ms before fail` )
  }

});

client.login(token);
