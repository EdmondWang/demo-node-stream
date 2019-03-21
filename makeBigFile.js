const fs = require('fs');
const file = fs.createWriteStream('./dist/big.file');

for (var i = 0; i < 1e6; i++) {
    file.write('A stream is an abstract interface for working with streaming data in Node.js. The stream module provides a base API that makes it easy to build objects that implement the stream interface.');
}
file.end();