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

// myIn.push('ABC');
// myIn.push('DEF');
// myIn.push('GHI');

// myIn.push(null); // no more data

myIn.pipe(process.stdout);

module.exports = myIn;