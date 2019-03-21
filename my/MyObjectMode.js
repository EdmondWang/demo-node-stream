// incoming: 'a,b,c,d', output: '{a: b, c: d}'

const {
    Transform
} = require('stream');

const splitComma = new Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().trim().split(','));
        callback();
    }
});

const arry2Obj = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
        let obj = {};
        for (let i = 0; i < chunk.length; i = i + 2) {
            let key = chunk[i];
            let value = chunk[i + 1];
            obj[key] = value;
        }

        this.push(obj);
    }
});

const obj2Str = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
        this.push(JSON.stringify(chunk));
    }
});

process.stdin.pipe(splitComma).pipe(arry2Obj).pipe(obj2Str).pipe(process.stdout);