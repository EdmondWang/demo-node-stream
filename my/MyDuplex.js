const {
    Duplex
} = require('stream');

const myDuplex = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) {
            this.push('\n');
            this.push(null);
        }
    }
});

myDuplex.currentCharCode = 65;

process.stdin.pipe(myDuplex).pipe(process.stdout);

module.exports = myDuplex;