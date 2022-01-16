const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientId, guildId, token } = require("./config.json");
const emoji = require(`emoji-log`);
const timer = require(`@calipsa/timer`);
let end1 = timer();

const commands = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	let duration1 = end1();
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	duration1 = duration1 * 1000;
    duration1 = Math.round(duration1);
    duration1 = duration1 + 1;
    duration1 = duration1 / 1000;
    console.emoji(`✅ `, `${file} took ${duration1} ms to register` )
}
const commandFilesMc = fs.readdirSync('./commands/mc').filter(file => file.endsWith('.js'));
for (const file of commandFilesMc) {
	let duration1 = end1();
	const command = require(`./commands/mc/${file}`);
	commands.push(command.data.toJSON());
	duration1 = duration1 * 1000;
    duration1 = Math.round(duration1);
    duration1 = duration1 + 1;
    duration1 = duration1 / 1000;
    console.emoji(`✅ `, `${file} took ${duration1} ms to register` )
}
const commandFilesOther = fs.readdirSync('./commands/others').filter(file => file.endsWith('.js'));
for (const file of commandFilesOther) {
	let duration1 = end1();
	const command = require(`./commands/others/${file}`);
	commands.push(command.data.toJSON());
	duration1 = duration1 * 1000;
    duration1 = Math.round(duration1);
    duration1 = duration1 + 1;
    duration1 = duration1 / 1000;
    console.emoji(`✅ `, `${file} took ${duration1} ms to register` )
}
const commandFilesThneed = fs.readdirSync('./commands/thneed').filter(file => file.endsWith('.js'));
for (const file of commandFilesThneed) {
	let duration1 = end1();
	const command = require(`./commands/thneed/${file}`);
	commands.push(command.data.toJSON());
	duration1 = duration1 * 1000;
    duration1 = Math.round(duration1);
    duration1 = duration1 + 1;
    duration1 = duration1 / 1000;
    console.emoji(`✅ `, `${file} took ${duration1} ms to register` )
}

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
