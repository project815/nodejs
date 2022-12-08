const express = require("express");
const app = express();
const port = 3000;

const server = require('http').Server(app);

server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

const io = require("socket.io")(server, {
	cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
	console.log("Got connection!");
	socket.on('SEND', (data) => {
		console.log("Received test Event " + data);
		
		socket.emit("RECEIVE", data);
	});

});
