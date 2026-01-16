const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from insecure Docker image!');
});

server.listen(3000);

