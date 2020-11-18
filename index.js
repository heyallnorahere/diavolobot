var discord = require('discord.js');
var fs = require('fs');
var client = new discord.Client();
client.once('ready', function() {
    console.log('ready');
});
client.on('message', function(msg) {
    var message = msg.content;
    var index = message.toLowerCase().indexOf('diavolo');
    if ((msg.author.id != client.user.id) && (index != -1)) {
        msg.channel.send('diavolo');
    }
});
fs.readFile('token', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    client.login(data);
});
