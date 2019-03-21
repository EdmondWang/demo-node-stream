const {
    Readable
} = require('stream');

const myIn = new Readable({
    read(size) {
        this.push(String.fromCharCode(this.currentCharCode++));
        if (this.currentCharCode > 90) {
            this.push('\n');
            this.push(null);
        }
    }
});

myIn.currentCharCode = 65;

myIn.pipe(process.stdout);

module.exports = myIn;