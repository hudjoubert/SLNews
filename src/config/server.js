const port = 7000;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

require('../api/controllers/authController')(server);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(port, function () {
  console.log(`Backend rodando na porta ${port}.`);
});

module.exports = server;
