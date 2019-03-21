const {
    Transform
} = require('stream');
const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');
const file = process.argv[2];

const reportProgress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null);
    }
});

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(crypto.createCipher('aes192', 'a-secret'))
    .pipe(reportProgress)
    .pipe(fs.createWriteStream(file + '.zz'))
    .on('finish', () => console.log('done'));