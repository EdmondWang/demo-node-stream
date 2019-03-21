const fs = require('fs');
const file = fs.createWriteStream('./dist/big.file');

for (var i = 0; i < 1e6; i++) {
    file.write(i.toString() + '\n');
}
file.end();