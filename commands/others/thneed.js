const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thneed')
		.setDescription('Replies with what a thneed is!'),
	async execute(interaction) {
        let randomNumber = Math.floor(Math.random() * (16 - 0) + 0)
        let imageArray = ['https://static.wikia.nocookie.net/seuss/images/0/08/Thneed_front.PNG/revision/latest/scale-to-width-down/185?cb=20120226185446', 'https://static.wikia.nocookie.net/seuss/images/b/b8/Thneed_back.PNG/revision/latest/scale-to-width-down/185?cb=20120226185519', 'https://static.wikia.nocookie.net/seuss/images/3/3e/Thneed_shirt.PNG/revision/latest/scale-to-width-down/151?cb=20120226190119', 'https://static.wikia.nocookie.net/seuss/images/8/87/Thneed_sock.PNG/revision/latest/scale-to-width-down/166?cb=20120226190140', 'https://static.wikia.nocookie.net/seuss/images/b/b0/Thneed_glove.PNG/revision/latest/scale-to-width-down/147?cb=20120226190308', 'https://static.wikia.nocookie.net/seuss/images/9/98/Thneed_hat.PNG/revision/latest/scale-to-width-down/185?cb=20120226190227', 'https://static.wikia.nocookie.net/seuss/images/a/ae/Thneed_carpet.PNG/revision/latest/scale-to-width-down/185?cb=20120226190202', 'https://static.wikia.nocookie.net/seuss/images/9/9b/Thneed_pillow.PNG/revision/latest/scale-to-width-down/173?cb=20120226190341', 'https://static.wikia.nocookie.net/seuss/images/7/7c/Thneed.jpg/revision/latest/scale-to-width-down/185?cb=20150926210417', 'https://static.wikia.nocookie.net/seuss/images/c/c6/Lorax_thneed.png/revision/latest/scale-to-width-down/185?cb=20120216030939', 'https://static.wikia.nocookie.net/seuss/images/e/ec/The-lorax-1971-thneed-once-ler-review-dr-seuss-special.jpg/revision/latest/scale-to-width-down/185?cb=20171018171035', 'https://static.wikia.nocookie.net/seuss/images/c/c9/Lorax-dr-seuss-illo_5101.jpg/revision/latest/scale-to-width-down/185?cb=20121112001423', 'https://static.wikia.nocookie.net/seuss/images/5/55/The-lorax-dr-seuss-top4.jpg/revision/latest/scale-to-width-down/185?cb=20121112004224', 'https://static.wikia.nocookie.net/seuss/images/3/3a/Everybodythneed.jpg/revision/latest/scale-to-width-down/185?cb=20201212174223', 'https://static.wikia.nocookie.net/seuss/images/b/b4/Once-ler_knitting.png/revision/latest/scale-to-width-down/185?cb=20111102064502']
        const thneedDef = new Discord.MessageEmbed()
        .setColor("#FF00FF")
        .setDescription(`A **Thneed** is a highly versatile object knitted from the foliage of a Truffula Tree. According to the Once-ler, it is "A-fine-something-that-all-people need." It costs $3.98 according to The Lorax Book and The Lorax (film). `)
        .addField("Appearance", "The color of a Thneed depends on the color of the tree it is knitted from (however all Thneeds shown have a reddish-pink color). Its shape can also be changed to suit different purposes but its default form resembles a sweater.")
        .setImage(imageArray[randomNumber])
        return interaction.editReply({ embeds: thneedDef });
	},
};