const http = require('http');

const server = http.createServer((req, res) => {

    // req, http.IncomingMessage
    // res, http.ServerResponse

    req.setEncoding('utf-8');

    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        try {
            res.write(req.headers);
        } catch (e) {
            console.error(e);
            res.write(JSON.stringify(e));
        } finally {
            res.end();
        }
    });

});

server.listen(1337);