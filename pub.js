const redis = require("redis");
const pub = redis.createClient();

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
    if (text === 'quit\n') {
        done();
    }
    pub.publish('channel', text);
});

function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
}