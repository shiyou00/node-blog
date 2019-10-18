const http = require('http');
const serverhandle = require('../app');

const PORT = 8000;

const server = http.createServer(serverhandle);

server.listen(PORT);