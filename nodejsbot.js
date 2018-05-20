const Discord = require('discord.js');
const client = new Discord.Client();
const ascii = require('ascii-art');

const TOKEN = "NDQ3NzY0MzkxNDgwMzkzNzM4.DeMUwQ.ulI-7txijDZfi6cJcyS-zDFTDcs";
var prefix = "!ascii ";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
 	if(message.content.startsWith(prefix)){
 		var command = message.content.substring(prefix).split (" ");
		switch(command[1]){
			case "DEMO!":
			ascii.font("Demo!",'Doom', function(render){
 				message.channel.send(render);
 				console.log(render);
 			});
			break;
			default:
			message.reply("Bad command");
			break;
		}
 	}
});
client.login(TOKEN);