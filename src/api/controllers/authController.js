const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Failed to registration user' });
  }
});

module.exports = server => server.use('/auth', router);
