const Discord = require('discord.js');
const { get } = require("snekfetch"); 
const { Client, Util } = require('discord.js');
const client = new Client({ disableEveryone: true });
var prefix="h.";
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new Youtube("AIzaSyBTuMObrFdM49CRDbEQ7kl_LjPFPGhnUsw"); 
var isPlaying; // we will use this variable to determine if a song is playing
const queue = new Map();
var looping = false;

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
	client.user.setPresence({ game: { name: 'Type ' + prefix + ' to play with me!' }, status: 'online' });
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', async msg => {
 const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);


if(msg.content=="Sepi") {
if(msg.guild.id=='564633296609476618'){
	msg.author.send("https://cdn.discordapp.com/attachments/531091986300796941/636144876014141440/au_ah.png");
}}
if(msg.content=="sepi") {
if(msg.guild.id=='564633296609476618'){
	msg.author.send("https://cdn.discordapp.com/attachments/531091986300796941/636144876014141440/au_ah.png");
}}
if(msg.content.startsWith('/.')){
	if(msg.author.id=='441482720153960449'){
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
msg.reply(" DIAM KAMU!1!1!1!");
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
				.setTitle(` $ {user.username}, you have been patted by $ {msg.author.username} ! >///<`)
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
	.setTitle('Commands.')
	.addField(prefix+'cmd / '+prefix+'help', 'Display this message.', true)
	.addField('Fun','**'+prefix+'avatar** \n The bot will send the senders profile photo / avatar, mention someone display their avatar. \n ** '+
	prefix+'cat** \n Bot will send a random cat image.\n **'+
	prefix+'dog** \n Bot will send a random dog image.\n **'+
	prefix+'bird** \n Bot will send a random bird image.\n **'+
	prefix+'pat** \n  Bot will send a random patting GIF (Must mention someone.)\n**'+
	prefix+'hug** \n  Bot will send a random hugging GIF (Must mention someone.)\n',true)
	.addField('Musik', prefix+'play \n The bot will play songs according to user input. Parameters can be in the form of live video links or song titles.\n**'+
	prefix+'pause** \n Pause the song.\n **'+
	prefix+'resume** \n Resume the song.\n **'+
	prefix+'stop** \n Clears playlist, stops playback and disconnects from VC.\n **'+
	prefix+'queue** \n Shows song queue.\n **'+
	prefix+'join** \n Bot will join VC the user in.\n **'+
	prefix+'leave** \n Bot will leave VC .\n **'+
	prefix+'np** \n Show the song currently playing.\n ', true)
	//.addField(prefix+'meme', 'Bot akan mengirim meme secara acak.', true)
	.setTimestamp();
	msg.channel.send(exampleEmbed);
	}
	if(msg.content.startsWith(prefix + 'leave ')) {
	serverQueue.voiceChannel.leave();
	}
	
if(msg.content.startsWith(prefix + 'play')) {
	const serverQueue = queue.get(msg.guild.id);
	const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send("You're not in a Voice Channel!");
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I lack the permission to connect to this Voice Channel!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I lack the permission to speak in this Voice Channel!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			
			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
						var warna='#'+Math.floor(Math.random()*16777215).toString(16);
		const exampleEmbed = new Discord.RichEmbed()
	.setColor(warna)
	.setTitle('Song selection : :.')
	.setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')} \n Please choose a song. (1-10)`);
	msg.channel.send(exampleEmbed);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						msg.channel.bulkDelete(1);
						return msg.channel.send('Invalid input / Request timed out.');
						msg.delete(3000);
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 Song not found. :(');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	//});
	} if (msg.content.startsWith(prefix + 'skip')) {
		if (!msg.member.voiceChannel) return msg.channel.send("You're not in a Voice Channel!");
		if (!serverQueue) return msg.channel.send('Queue is empty.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return msg.channel.send('Skipped the song for you~.');
	}  if (msg.content.startsWith(prefix + 'stop')) {
		if (!msg.member.voiceChannel) return msg.channel.send("You're not in a Voice Channel!");
		if (!serverQueue) return msg.channel.send('Queue is empty.');
		serverQueue.songs = [];
		looping = false;
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return msg.channel.send('Playback Stopped.');
		return undefined;
	}  
	if (msg.content.startsWith(prefix + 'np')) {
		if (!serverQueue) return msg.channel.send('Nothing playing.');
		return msg.channel.send(`🎶 Playing: **${serverQueue.songs[0].title}**`);
	}  if (msg.content.startsWith(prefix + 'queue')) {
		if (!serverQueue) return msg.channel.send('Nothing playing.');
		return msg.channel.send(`
__**Song Queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now Playing:** ${serverQueue.songs[0].title}
		`);
	}  if (msg.content.startsWith(prefix + 'pause')) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the song for you~');
		}
		return msg.channel.send('Nothing playing.');
	}  if (msg.content.startsWith(prefix + 'resume')) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the song for you~');
		}
		return msg.channel.send('Nothing playing.');
	}
	if (msg.content.startsWith(prefix + 'leave')) {
  // check if the bot is connected to a voice channel
    msg.guild.me.voiceChannel.leave();
    msg.reply("I left the Voice Channel.");
 
  }if (msg.content.startsWith(prefix + 'join')) {
  // check if the bot is connected to a voice channel
  var channel = msg.member.voiceChannel;
  channel.join();
    msg.reply("I joined the Voice Channel");
 
  }




	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`Tidak dapat memasuki VC: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Tidak dapat memasuki VC: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist){ return undefined;}
		else { msg.channel.bulkDelete(2);
		msg.channel.send(`✅ **${song.title}** has been added to the queue!`);}
		
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		if(looping){
		queue.push(queue.shift());}else{
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		looping = false;
		return;
	}}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url),{bitrate: 256000 /* 256kbps */})	
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 10);

	serverQueue.textChannel.send(`🎶 Playing: **${song.title}**`);




//switch(msg.content){
//	
//	case "":
//}

	

}

client.login('NjM0NjQwMTA5OTI0MjUzNjk2.XaldfQ.t_EgtGcP6I7dx96Me5X-GwrzJGQ');