const restful = require('node-restful');

const mongoose = restful.mongoose;

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true },
  avatar: String,
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
  signUpDate: { type: Date, default: Date.now() }
});

module.exports = restful.model('user', user);
