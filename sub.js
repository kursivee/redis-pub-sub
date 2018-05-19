const redis = require('redis');
const sub = redis.createClient();
const say = require('say');

sub.on("message", function (channel, message) {
    console.log("sub channel " + channel + ": " + message);
    say.speak(message, 'Alex');
});

sub.subscribe('channel');