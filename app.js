const http = require('http');
const server = http.createServer((req, res) => {
	console.log('new connection...');
	if (req.url === '/') {
		res.write("Hello world");
		res.end();
	}
	if (req.url === '/api/versions') {
		res.write(JSON.stringify([1,2,3]));
		res.end();
	}
});

/*
server.on("connection", (socket) => {
	console.log('new connection...');
})*/

server.listen(3000);

console.log('server listening on port 3000');

