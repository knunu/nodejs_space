/**
 * Created by Knunu on 2016. 7. 2..
 */

var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello World');
});

server.listen(8000);