var http = require("http");
var port = process.env.port || 1337;

var server = http.createServer(function(request, response) {
    response.writeHead(300, {"Content-Type": "text/plain"});
    response.write("halo");
    response.end();
});

server.listen(port, 'localhost');