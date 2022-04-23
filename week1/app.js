const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(process.env.port || 3000);