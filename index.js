const Discord = require('discord.js');
const { get } = require("snekfetch"); 
const { Client, Util } = require('discord.js');
const client = new Client({ disableEveryone: true });
var prefix="h?";

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new Youtube("AIzaSyCx0dxHHvP_ru_T9sTQT2lVSGxPrLMLYdA"); // insert here your Youtube API key, you can also store it as an environment variable or in a config.json

//var queue = []; // in this array we will store songs in queue
var isPlaying; // we will use this variable to determine if a song is playing
const queue = new Map();

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
	client.user.setPresence({ game: { name: 'Ketik h? untuk bermain denganku!' }, status: 'online' });
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', async msg => {
 // if (msg.content === 'ping') {
 //   msg.reply('pong');
 // }
 const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
if(msg.content.startsWith(prefix+'say')){
	//msg.delete();
	var a=msg.content.replace(prefix+'say','');
	if(a){
	if (msg.attachments.size > 0) {
	var b = (msg.attachments).array();
		msg.channel.send(a,{
		 file: b[0].url
	});
	}else{
			msg.channel.send(a);
	}}
	
	else{
		msg.channel.send("Pesan tidak boleh kosong. \nContoh penggunaan: ``` "+prefix+"say Bebek Harom~```");
	}
}
if(msg.content.startsWith(prefix+'sneak')){
	//msg.delete();	
	if(msg.author.id=='378082578915131394'){
	var a=msg.content.replace(prefix+'sneak','');
	if(a){
	msg.delete(0);
	msg.channel.send(a);}
	else{
		msg.channel.send("Pesan tidak boleh kosong. \nContoh penggunaan: ``` "+prefix+"say Bebek Harom~```");
	}
}else{
		msg.channel.send("Perintah ini hanya berlaku untuk pemilik bot.");
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
			return msg.reply('Mention seseorang untuk menggunakan perintah ini.');
		}
		
		try {
			
			get('https://some-random-api.ml/animu/pat').then(res => {
				const embed = new Discord.RichEmbed()
				.setColor(warna)
				.setTitle('${user.username},kamu telah di pat oleh ${msg.author.username}! >///<')
				.setImage(res.body.link)
				.setTimestamp()
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	}else{
		
	}}}
	if(msg.content.startsWith(prefix + 'lyrics')) {
	var warna='#'+Math.floor(Math.random()*16777215).toString(16);
	var target=msg.content.replace(prefix+'lyrics','');
		console.log(target);
	if(target){
		try {
			get('https://some-random-api.ml/lyrics?title='+target).then(res => {
				if(res.body.lyrics.length>1024){
					msg.channel.send('Lirik tidak bisa lebih dari 1024 karakter.');
				}else{
				const embed = new Discord.RichEmbed()
				.setColor(warna)
				.addField(res.body.title, res.body.lyrics)
				.setTimestamp()
				return msg.channel.send({embed});
			}});
		} catch(err) {
			return msg.channel.send(err.stack);
		}
	}else{
		console.log(target);
	}}
if(msg.content.includes('😢')) {
	msg.channel.send('Anjay Nangid 👊😎');
}
if (msg.content.startsWith(prefix+'avatar')){
	const withoutPrefix = msg.content.slice(prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return msg.reply('Tidak dapat mengambil Avatar,pastikan pengguna yang anda mention valid.');
		}

		return msg.channel.send(`Avatar milik ${user.username}': ${user.displayAvatarURL}`);
	}

	return msg.channel.send(`${msg.author.username}, Avatar anda: ${msg.author.displayAvatarURL}`);
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
	.setTitle('Daftar Perintah/Command Bot Harom.')
	.addField(prefix+'cmd / '+prefix+'help', 'Menampilkan pesan ini.', true)
	.addField(prefix+'say', 'Bot akan mengirim pesan berdasarkan input user.', true)
	.addField(prefix+'cat', 'Bot akan mengirim gambar kucing secara acak.', true)
	.addField(prefix+'dog', 'Bot akan mengirim gambar anjing secara acak.', true)
	.addField(prefix+'bird', 'Bot akan mengirim gambar burung secara acak.', true)
	.addField(prefix+'pat', 'Bot akan mengirim GIF Headpat secara acak.', true)
	.addField(prefix+'play', 'Bot akan memutar lagu sesuai input user.Parameter dapat berupa link video langsung maupun Judul lagu.', true)
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
		if (!voiceChannel) return msg.channel.send('Anda harus berada dalam Voice Channel untuk menggunakan perintah ini.');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('Harom tidak dapat masuk ke dalam Voice Channel,pastikan saya dapat mengaksesnya!');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('Harom tidak dapat berbicara di Voice Channel ini. pastikan Harom dapat berbicara di Voice Channel target.');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Playlist: **${playlist.title}** Telah ditambahkan dalam antrian!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Silahkan pilih lagu. (1-10)
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Input tidak valid. Membatalkan.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 Video tidak ditemukan :(.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	//});
	} if (msg.content.startsWith(prefix + 'skip')) {
		if (!msg.member.voiceChannel) return msg.channel.send('Anda harus berada dalam voice channel.');
		if (!serverQueue) return msg.channel.send('Antrian lagu kosong.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return msg.channel.send('Lagu telah di lewati.');
	}  if (msg.content.startsWith(prefix + 'stop')) {
		if (!msg.member.voiceChannel) return msg.channel.send('Anda harus berada dalam voice channel.');
		if (!serverQueue) return msg.channel.send('Antrian lagu kosong.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return msg.channel.send('Pemutaran lagu telah berhenti.');
		return undefined;
	}  if (msg.content.startsWith(prefix + 'volume')) {
		if (!msg.member.voiceChannel) return msg.channel.send('Anda harus berada dalam voice channel.');
		if (!serverQueue) return msg.channel.send('Antrian lagu kosong.');
		if (!args[1]) return msg.channel.send(`Volume saat ini: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`);
	}  if (msg.content.startsWith(prefix + 'np')) {
		if (!serverQueue) return msg.channel.send('Tidak ada lagu yang dimainkan.');
		return msg.channel.send(`🎶 Memainkan: **${serverQueue.songs[0].title}**`);
	}  if (msg.content.startsWith(prefix + 'queue')) {
		if (!serverQueue) return msg.channel.send('Tidak ada lagu yang dimainkan.');
		return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	}  if (msg.content.startsWith(prefix + 'pause')) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Paused the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
	}  if (msg.content.startsWith(prefix + 'resume')) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Resumed the music for you!');
		}
		return msg.channel.send('There is nothing playing.');
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
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);




//switch(msg.content){
//	
//	case "":
//}

	

}

client.login('NjA4MTg3NTIzOTEwMzM2NTIw.XUkiVQ.1bWoKSrVGoXAEdVSBI-ULVAEElY');