const {
    Writable
} = require('stream');

const myOut = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

process.stdin.pipe(myOut);

// equivalent to process.stdin.pipe(process.stdout)

module.exports = myOut;