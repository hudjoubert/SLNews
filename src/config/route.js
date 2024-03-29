const express = require('express');
const router = express.Router();

module.exports = server => {
  server.use('/api', router);
  const userService = require('../api/user/userService');
  userService.register(router, '/user');
};
