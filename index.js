const Discord = require ('discord.js');
const {get} = require ("snekfetch");
const {Client, Util} = require ('discord.js');
const client = new Client ({disableEveryone: true});
var prefix = "h.";

const {Command} = require ('discord.js-commando');
const {MessageEmbed} = require ('discord.js');
const Youtube = require ('simple-youtube-api');
const ytdl = require ('ytdl-core');
const youtube = new Youtube ("AIzaSyBTuMObrFdM49CRDbEQ7kl_LjPFPGhnUsw"); // insert here your Youtube API key, you can also store it as an environment variable or in a config.json

// var queue = []; // in this array we will store songs in queue
var isPlaying; // we will use this variable to determine if a song is playing
const queue = new Map ();
var looping = false;

function getUserFromMention (mention) {
if (! mention) return;

if (mention.startsWith ('<@') && mention.endsWith ('>')) {
mention = mention.slice (2, -1);

if (mention.startsWith ('!')) {
mention = mention.slice (1);
}

return client.users.get (mention);
}
}


client.on ('ready', () => {
client.user.setPresence ({game: {name: 'Type' + prefix + 'to play with me!'}, status: 'online'});
  console.log (`Logged in as $ {client.user.tag}!`);
});
client.on ('message', async msg => {
 // if (msg.content === 'ping') {
 // msg.reply ('pong');
 //}
 const args = msg.content.split(' ');
const searchString = args.slice(1).join(' ');
const url = args [1]? args [1] .replace (/<(.+)>/ g, '$ 1'): '';
const serverQueue = queue.get(msg.guild.id);

if (msg.content.startsWith ('/.')) {
//msg.delete ();
if (msg.author.id == '378082578915131394') {
var a = msg.content.replace ('/.', '');
if (a) {
msg.delete (0);
if (msg.attachments.size> 0) {
var b = (msg.attachments) .array ();
msg.channel.send (a, {
file: b [0]. url
});
} else {
msg.channel.send (a);
}}

else {
msg.channel.send ("Message must not be empty. \ nExamples of use:` `` "+ prefix +" say Duck Harom ~ `` `");
}
} else {
msg.delete (0);
}
}
if (msg.content.startsWith (prefix + 'cat')) {
var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
try {
get ('https://aws.random.cat/meow') .then (res => {
const embed = new Discord.RichEmbed ()
.setColor
.setTitle ('Meow ~')
.setImage (res.body.file)
.setTimestamp ()
return msg.channel.send ({embed});
});
} catch (err) {
return msg.channel.send (err.stack);
}
}
if (msg.content.startsWith (prefix + 'dog')) {
var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
try {
get ('https://dog.ceo/api/breeds/image/random') .then (res => {
const embed = new Discord.RichEmbed ()
.setColor
.setTitle ('Woof ~')
.setImage (res.body.message)
.setTimestamp ()
return msg.channel.send ({embed});
});
} catch (err) {
return msg.channel.send (err.stack);
}
}

if (msg.content.startsWith (prefix + 'bird')) {
var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
try {
get ('https://some-random-api.ml/img/birb') .then (res => {
const embed = new Discord.RichEmbed ()
.setColor
.setTitle ('Chirp Chirp ~')
.setImage (res.body.link)
.setTimestamp ()
return msg.channel.send ({embed});
});
} catch (err) {
return msg.channel.send (err.stack);
}
}
if (msg.content.startsWith (prefix + 'pat')) {
var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
var target = msg.content.replace (prefix + 'pat', '');

if (target) {
const withoutPrefix = msg.content.slice (prefix.length);
const split = withoutPrefix.split (/ + /);
const command = split [0];
const args = split.slice (1);
if (args [0]) {
const user = getUserFromMention (args [0]);
if (! user) {
return msg.reply ('Mention someone to use this command.');
}

try {

get ('https://some-random-api.ml/animu/pat') .then (res => {
const embed = new Discord.RichEmbed ()
.setColor
.setTitle (`$ {user.username}, you have been patented by $ {msg.author.username}!> /// <`)
.setImage (res.body.link)
.setTimestamp ()
return msg.channel.send ({embed});
});
} catch (err) {
return msg.channel.send (err.stack);
}
} else {

}}}
if (msg.content.startsWith (prefix + 'hug')) {
var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
var target = msg.content.replace (prefix + 'hug', '');

if (target) {
const withoutPrefix = msg.content.slice (prefix.length);
const split = withoutPrefix.split (/ + /);
const command = split [0];
const args = split.slice (1);
if (args [0]) {
const user = getUserFromMention (args [0]);
if (! user) {
return msg.reply ('Mention someone to use this command.');
}

try {

get ('https://some-random-api.ml/animu/hug') .then (res => {
const embed = new Discord.RichEmbed ()
.setColor
.setTitle (`$ {user.username}, you have been hugged by $ {msg.author.username}! <3`)
.setImage (res.body.link)
.setTimestamp ()
return msg.channel.send ({embed});
});
} catch (err) {
return msg.channel.send (err.stack);
}
} else {

}}}

if (msg.content.includes ('😢')) {
msg.channel.send ('Anjay Nangid 👊😎');
}
if (msg.content.startsWith (prefix + 'avatar')) {
const withoutPrefix = msg.content.slice (prefix.length);
const split = withoutPrefix.split (/ + /);
const command = split [0];
const args = split.slice (1);
if (args [0]) {
const user = getUserFromMention (args [0]);
if (! user) {
return msg.reply ('Cannot fetch Avatar, make sure the user you mentioned is valid.');
}

return msg.channel.send (`Avatar belonging to $ {user.username}: $ {user.displayAvatarURL}`);
}

return msg.channel.send (`$ {msg.author.username}, your avatar: $ {msg.author.displayAvatarURL}`);
}
//if(msg.content.startsWith(prefix + 'meme')) {
// var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
// try {
// get ('https://some-random-api.ml/meme') .then (res => {
// const embed = new Discord.RichEmbed ()
// .setColor
// .setTitle (res.body.caption)
// .setImage (res.body.image)
// .setTimestamp ()
// return msg.channel.send ({embed});
//});
//} catch (err) {
// return msg.channel.send (err.stack);
//}
//}

if (msg.content.startsWith (prefix + 'cmd') || msg.content.startsWith (prefix + 'help')) {
var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
const exampleEmbed = new Discord.RichEmbed ()
.setColor
.setTitle ('Harom Bot Command List.')
.addField (prefix + 'cmd /' + prefix + 'help', 'Display this message.', true)
.addField ('Fun', '**' + prefix + 'avatar ** \ n Bot will send the sender's profile photo / avatar, mentioning someone to make Bot take his avatar. \ n **' +
prefix + 'cat ** \ n Bot will send a cat picture randomly. \ n **' +
prefix + 'dog ** \ n Bot will send pictures of dogs randomly. \ n **' +
prefix + 'bird ** \ n Bot will send pictures of birds randomly. \ n **' +
prefix + 'pat ** \ n Bots will send Headpat GIFs randomly (User must Mention someone for this command to work) \ n **' +
prefix + 'hug ** \ n Bot will send GIF Hugs randomly. (User must Mention someone for this command to work) \ n', true)
.addField ('Music', prefix + 'play \ n Bot will play songs according to user input. Parameters can be direct video links or song titles. \ n **' +
prefix + 'pause ** \ n Bot will pause the song. \ n **' +
prefix + 'resume ** \ n Bot will play back the paused song. \ n **' +
prefix + 'stop ** \ n Bot will stop the song. \ n **' +
prefix + 'queue ** \ n Display the song queue. \ n **' +
prefix + 'join ** \ n Bot will enter the user's Voice Channel. \ n **' +
prefix + 'leave ** \ n Bot will exit the Voice Channel. \ n **' +
prefix + 'np ** \ n Display the title of the song being played. \ n', true)
//.addField(prefix+'meme ',' Bot will send memes randomly. ', true)
.setTimestamp ();
msg.channel.send (exampleEmbed);
}
if (msg.content.startsWith (prefix + 'leave')) {
serverQueue.voiceChannel.leave ();
}

if (msg.content.startsWith (prefix + 'play')) {
const serverQueue = queue.get (msg.guild.id);
const voiceChannel = msg.member.voiceChannel;
if (! voiceChannel) return msg.channel.send ('You must be in Voice Channel to use this command.');
const permissions = voiceChannel.permissionsFor (msg.client.user);
if (! permissions.has ('CONNECT')) {
return msg.channel.send ('Harom cannot enter Voice Channel, make sure I can access it!');
}
if (! permissions.has ('SPEAK')) {
return msg.channel.send ('Harom cannot speak on this Voice Channel. make sure Harom can speak on the target Voice Channel.');
}

if (url.match (/ ^ https?: \ / \ / (www.youtube.com | youtube.com) \ / playlist (. *) $ /)) {
const playlist = await youtube.getPlaylist (url);
const videos = await playlist.getVideos ();
for (const video of Object.values ​​(videos)) {
const video2 = await youtube.getVideoByID (video.id); // eslint-disable-line no-await-in-loop
await handleVideo (video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
}

return msg.channel.send (`✅ Playlist: ** $ {playlist.title} ** Has been added to the queue!`);
} else {
try {
var video = await youtube.getVideo (url);
} catch (error) {
try {
var videos = await youtube.searchVideos (searchString, 10);
let index = 0;
var color = '#' + Math.floor (Math.random () * 16777215). toString (16);
const exampleEmbed = new Discord.RichEmbed ()
.setColor
.setTitle ('Song selections:')
.setDescription (`$ {videos.map (video2 =>` ** $ {++ index} - ** $ {video2.title} `). join ('\ n')} \ n Please choose a song. (1 -10) `);
msg.channel.send (exampleEmbed);
// eslint-disable-next-line max-depth
try {
var response = await msg.channel.awaitMessages (msg2 => msg2.content> 0 && msg2.content <11, {
maxMatches: 1,
time: 10000.
errors: ['time']
});
} catch (err) {
console.error (err);
msg.channel.bulkDelete (1);
return msg.channel.send ('Invalid input. Canceling.');
msg.delete (3000);
}
const videoIndex = parseInt (response.first (). content);
var video = await youtube.getVideoByID (videos [videoIndex - 1]. id);
} catch (err) {
console.error (err);
return msg.channel.send ('🆘 Video not found :(.');
}
}
return handle Video (video, msg, voiceChannel);
}
//});
} if (msg.content.startsWith (prefix + 'skip')) {
if (! msg.member.voiceChannel) return msg.channel.send ('You must be in the voice channel.');
if (! serverQueue) return msg.channel.send ('The song queue is empty.');
serverQueue.connection.dispatcher.end ('Skip command has been used!');
return msg.channel.send ('The song has been skipped.');
} if (msg.content.startsWith (prefix + 'stop')) {
if (! msg.member.voiceChannel) return msg.channel.send ('You must be in the voice channel.');
if (! serverQueue) return msg.channel.send ('The song queue is empty.');
serverQueue.songs = [];
looping = false;
serverQueue.connection.dispatcher.end ('Stop command has been used!');
return msg.channel.send ('Song playback has stopped.');
return undefined;
}
if (msg.content.startsWith (prefix + 'np')) {
if (! serverQueue) return msg.channel.send ('No song is played.');
return msg.channel.send (`🎶 Plays: ** $ {serverQueue.songs [0] .title} **`);
} if (msg.content.startsWith (prefix + 'queue')) {
if (! serverQueue) return msg.channel.send ('No song is played.');
return msg.channel.send (`
__ ** Song queue: ** __
$ {serverQueue.songs.map (song => `** - ** $ {song.title}`). join ('\ n')}
** Now playing: ** $ {serverQueue.songs [0] .title}
`);
} if (msg.content.startsWith (prefix + 'pause')) {
if (serverQueue && serverQueue.playing) {
serverQueue.playing = false;
serverQueue.connection.dispatcher.pause ();
return msg.channel.send ('⏸ The song has been paused!');
}
return msg.channel.send ('Nothing played.');
} if (msg.content.startsWith (prefix + 'resume')) {
if (serverQueue &&! serverQueue.playing) {
serverQueue.playing = true;
serverQueue.connection.dispatcher.resume ();
return msg.channel.send ('▶ The song has been played back!');
}
return msg.channel.send ('Nothing played.');
}
if (msg.content.startsWith (prefix + 'leave')) {
  // check if the bot is connected to a voice channel
    msg.guild.me.voiceChannel.leave ();
    msg.reply ("Logged Out of Voice Channel.");
 
  } if (msg.content.startsWith (prefix + 'join')) {
  // check if the bot is connected to a voice channel
  var channel = msg.member.voiceChannel;
  channel.join ();
    msg.reply ("Entered the Voice Channel");
 
  }
  if (msg.content.startsWith (prefix + 'loop')) {

if (! msg.member.voiceChannel) return msg.channel.send ('You must be in the voice channel.');
if (! looping) {
looping = true;
message.channel.send ("Active Repeat.");
} else {
looping = false;
message.channel.send ("Repeat Off.");
}
  }



return undefined;
});

async function handle Video (video, msg, voiceChannel, playlist = false) {
const serverQueue = queue.get (msg.guild.id);
console.log (video);
const song = {
id: video.id,
title: Util.escapeMarkdown (video.title),
url: `https://www.youtube.com/watch?v=$ {video.id}`
};
if (! serverQueue) {
const queueConstruct = {
textChannel: msg.channel,
voiceChannel: voiceChannel,
connection: null,
songs: [],
volume: 5,
playing: true
};
queue.set (msg.guild.id, queueConstruct);

queueConstruct.songs.push (song);

try {
var connection = await voiceChannel.join ();
queueConstruct.connection = connection;
play (msg.guild, queueConstruct.songs [0]);
} catch (error) {
console.error (`Cannot enter VC: $ {error}`);
queue.delete (msg.guild.id);
return msg.channel.send (`Cannot enter VC: $ {error}`);
}
} else {
serverQueue.songs.push (song);
console.log (serverQueue.songs);
if (playlist) {return undefined;}
else {msg.channel.bulkDelete (2);
msg.channel.send (`✅ ** $ {song.title} ** has been added to the queue!`);}

}
return undefined;
}

function play (guild, song) {
const serverQueue = queue.get (guild.id);

if (! song) {
if (looping) {
queue.push (queue.shift ());} else {
serverQueue.voiceChannel.leave ();
queue.delete (guild.id);
looping = false;
return;
}}
console.log (serverQueue.songs);

const dispatcher = serverQueue.connection.playStream (ytdl (song.url), {bitrate: 512000 / * 192kbps * /})
.on ('end', reason => {
if (reason === 'Stream is not generating quickly enough.') console.log ('Song ended.');
else console.log (reason);
serverQueue.songs.shift ();
play (guild, serverQueue.songs [0]);
})
.on ('error', error => console.error (error));
dispatcher.setVolumeLogarithmic (serverQueue.volume / 5);

serverQueue.textChannel.send (`🎶 Plays: ** $ {song.title} **`);




// switch (msg.content) {
//
// case "":
//}



}

client.login ('NjA4MTg3NTIzOTEwMzM2NTIw.XUkiVQ.1bWoKSrVGoXAEdVSBI-ULVAEElY');