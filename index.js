const Discord = require('discord.js');
const { get } = require("snekfetch"); 
const { Client, Util } = require('discord.js');
const client = new Client({ disableEveryone: true });
var prefix="h.";
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.get(mention);
	}
}


client.on('ready', () => {
	client.user.setPresence({ game: { name: 'Type ' + prefix + 'help to play with me!' }, status: 'online' });
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', async msg => {
 const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

if(msg.guild.id=='729296478337761292'){
	
if(msg.content.startsWith(prefix + 'pojok')){
		if(msg.author.id=='712501859721412669'){
			var isi=msg.content.replace(prefix +'pojok','');
	client.guilds.get('564633296609476618').channels.get('564696216756158464').send(isi);

		}
}}

if(msg.content.startsWith('/.')){
	if(msg.author.id=='712501859721412669'){
	var a=msg.content.replace('/.','');
	if(a){
		msg.delete(0);
	if (msg.attachments.size > 0) {
	var b = (msg.attachments).array();
		msg.channel.send(a,{
		 file: b[0].url
	});
	}else{
			msg.channel.send(a);
	}}
	
	else{
		msg.channel.send("Message cannot be empty.");
	}
}else{
	msg.delete(0);
msg.reply(" Nice Try.");
	}
}	
if(msg.content=="P") {
	if(msg.guild.id=='564633296609476618'){
msg.delete(0);
msg.channel.send("https://cdn.discordapp.com/attachments/564696216756158464/636325264535715851/tcqrbjr.png");
	}
}if(msg.content=="p") {
	if(msg.guild.id=='564633296609476618'){
msg.delete(0);
msg.channel.send("https://cdn.discordapp.com/attachments/564696216756158464/636325264535715851/tcqrbjr.png");
	}
}
if(msg.content.startsWith(prefix + 'cat')) {
	var warna='#'+Math.floor(Math.random()*16777215).toString(16);
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setColor(warna)
				.setTitle('Meow~')
				.setImage(res.body.file)
				.setTimestamp()
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	}
	if(msg.content.startsWith(prefix + 'dog')) {
		var warna='#'+Math.floor(Math.random()*16777215).toString(16);
		try {
			get('https://dog.ceo/api/breeds/image/random').then(res => {
				const embed = new Discord.RichEmbed()
				.setColor(warna)
				.setTitle('Woof~')
				.setImage(res.body.message)
				.setTimestamp()
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	}
	
if(msg.content.startsWith(prefix + 'bird')) {
	var warna='#'+Math.floor(Math.random()*16777215).toString(16);
		try {
			get('https://some-random-api.ml/img/birb').then(res => {
				const embed = new Discord.RichEmbed()
				.setColor(warna)
				.setTitle('Chirp Chirp~')
				.setImage(res.body.link)
				.setTimestamp()
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	}
	if(msg.content.startsWith(prefix + 'pat')) {
	var warna='#'+Math.floor(Math.random()*16777215).toString(16);
	var target=msg.content.replace(prefix+'pat','');
	
	if(target){
		const withoutPrefix = msg.content.slice(prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return msg.reply('Mention someone to use this command.');
		}
		
		try {
			
			get('https://some-random-api.ml/animu/pat').then(res => {
				const embed = new Discord.RichEmbed()
				.setColor(warna)
				.setTitle(` ${user.username},you've been patted by ${msg.author.username} ! <3`)
				.setImage(res.body.link)
				.setTimestamp()
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	}else{
		
	}}}
	if(msg.content.startsWith(prefix + 'hug')) {
	var warna='#'+Math.floor(Math.random()*16777215).toString(16);
	var target=msg.content.replace(prefix+'hug','');
	
	if(target){
		const withoutPrefix = msg.content.slice(prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return msg.reply('Mention someone to use this command.');
		}
		
		try {
			
			get('https://some-random-api.ml/animu/hug').then(res => {
				const embed = new Discord.RichEmbed()
				.setColor(warna)
				.setTitle(` ${user.username},you've been hugged by ${msg.author.username} ! <3`)
				.setImage(res.body.link)
				.setTimestamp()
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	}else{
		
	}}}


if (msg.content.startsWith(prefix+'avatar')){
	const withoutPrefix = msg.content.slice(prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return msg.reply('Unable to fetch Avatar, make sure the user you mentioned is valid. ');
		}

		return msg.channel.send(`${user.username}'s Avatar : ${user.displayAvatarURL}`);
	}

	return msg.channel.send(`${msg.author.username}, Your Avatar: ${msg.author.displayAvatarURL}`);
}
	//if(msg.content.startsWith(prefix + 'meme')) {
	//	var warna='#'+Math.floor(Math.random()*16777215).toString(16);
	//	try {
	//		get('https://some-random-api.ml/meme').then(res => {
	//			const embed = new Discord.RichEmbed()
	//			.setColor(warna)
	//			.setTitle(res.body.caption)
	//			.setImage(res.body.image)
	//			.setTimestamp()
	//			return msg.channel.send({embed});
	//		});
	//	} catch(err) {
	//		return msg.channel.send(err.stack);
	//	}
	//}

	if(msg.content.startsWith(prefix + 'cmd')||msg.content.startsWith(prefix+'help')) {
	var warna='#'+Math.floor(Math.random()*16777215).toString(16);
		const exampleEmbed = new Discord.RichEmbed()
	.setColor(warna)
	.setTitle('Commands')
	.addField(prefix+'cmd / '+prefix+'help', 'Display this message.', true)
	.addField('Fun','**'+prefix+'avatar** \n The bot will send the senders profile photo / avatar, mention someone display their avatar. \n ** '+
	prefix+'cat** \n Bot will send a random cat image.\n **'+
	prefix+'dog** \n Bot will send a random dog image.\n **'+
	prefix+'bird** \n Bot will send a random bird image.\n **'+
	prefix+'pat** \n  Bot will send a random patting GIF (Must mention someone.)\n**'+
	prefix+'hug** \n  Bot will send a random hugging GIF (Must mention someone.)\n',true)
	//.addField(prefix+'meme', 'Bot akan mengirim meme secara acak.', true)
	.setTimestamp();
	msg.channel.send(exampleEmbed);
	}
		




	return undefined;
});




//switch(msg.content){
//	
//	case "":
//}

	




client.login('NzI5MjkwOTM5Nzc2MTA2NTA2.XwG0sA.ucvpTz-RISPxTWrFa_zse7kR8TU');