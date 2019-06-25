const Discord = require('discord.js')
const client  = new Discord.client();
const http = require("http")
const express = require("express")
const path = require("path")
const app = new express;

var prefix = "!" 

app.get("/",(req,res) => {
	res.sendStatus(200)
	res.sendFile(path.join (__dirname + "/index.html"))
	
});
app.listen(3000)	

setInterval(() => {
	http.get("https://glitch.com/edit/#!/join/e64e4023-5c38-417b-9f05-4f9dbd8ea2c3")
	console.log ("pinlendi!")
}, 10000)


client.on('ready',() => {
	console.log('${client.user.tag} OK!');
});
client.on('message',msg => {	
    if (msg.content === 'ping') {
		msg.reply('pong!' + client.ping + "ms");
	}
});

client.login(process.env.TOKEN)
 	
