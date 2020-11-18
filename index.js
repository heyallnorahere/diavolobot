var discord = require('discord.js');
var fs = require('fs');
var client = new discord.Client();
client.once('ready', function() {
    console.log('ready');
});
client.on('message', function(msg) {
    if ((msg.author.id != client.user.id) && (msg.content == 'diavolo')) {
        msg.channel.send('diavolo');
    }
});
fs.readFile('token', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    client.login(data);
});
