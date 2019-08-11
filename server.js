
const express = require('express');
const router = require("./people")
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(201).json("Got home eyy we not homeless!");
});
server.use('/', router)

module.exports = server;