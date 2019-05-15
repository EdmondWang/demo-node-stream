const fs = require('fs');
const readline = require('readline');

const file = './dist/big.file';

const rl = readline.createInterface({
    input: fs.createReadStream(file, {
        encoding: 'utf-8'
    })
    // output: process.stdout
});

rl.on('line', (line) => {
    console.log(line);
});

rl.on('close', () => {
    console.log('close');
})