var discord = require('discord.js');
var fs = require('fs');
var client = new discord.Client();
function sendimage(path, channel) {
    var attachment = new discord.MessageAttachment();
    attachment.setFile(path);
    channel.send(attachment);
}
client.once('ready', function() {
    console.log('ready');
});
client.on('message', function(msg) {
    var message = msg.content;
    var valid_id = (msg.author.id != client.user.id);
    var lower = message.toLowerCase();
    var index = lower.indexOf('diavolo');
    if (valid_id && (index != -1)) {
        msg.channel.send('diavolo');
    }
    index = lower.indexOf('doppio');
    if (valid_id && (index != -1)) {
        sendimage("./doppio.png", msg.channel);
    }
});
fs.readFile('token', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    client.login(data);
});
