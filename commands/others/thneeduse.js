const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uses')
		.setDescription('Replies with a random use for a thneed!'),
	async execute(interaction) {
        let randomNumber = Math.floor(Math.random() * (40 - 0) + 0)
        let usesArray = ["Shirt", "Sock", "Large glove", "Hat", "Carpet", "Pillow", "Sheet", "Curtains", "Covers For Bicycle Seats", "Hammock", "Toothbrush Holder", "Canary Nest", "Sweatshirt", "Thneedle Thoup That Cures Backache Pain And Chest (how this is possible is unknown)", "Makes A Perfect Windshield Wiper", "Groom Your Hair When It Gets Mussed", "Eliminates Carborater Rust", "Sweater", "Umbrella", "Towel", "Skirt", "Pants", "Sponge", "Scarf", "Tightrope", "(Butterfly) Net", "Wig", "Purse/Bag", "Suit", "Boxing Glove(s)", "Parachute", "Reusable diaper", "Runny nose wiper", "Slingshot", "Jump rope", "Food (Tastes like bread, but without the crust)", "Windshield Wiper", "trap (catches a viper)", "Mustache Brush", "Mop"];
		return interaction.editReply(`Thneeds can take on a LARGE variety of forms for different purposes, such as:  **${usesArray[randomNumber]}*`);
	},
};