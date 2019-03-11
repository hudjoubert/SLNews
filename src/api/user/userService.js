const User = require('./user');

User.methods(['get', 'post', 'put', 'delete']);

User.route('createUser', async (req, res) => {
  const user = new User(req.body);
  user.save(err => {
    if (err) {
      res.status(500).json({ error: [err] });
    }
    res.status(200).send(user);
  });
});

User.route('/:id', async (req, res) => {
  res.send("I'm at /resources/:id/moreinfo!");
  // const { id } = req.body;
  // User.findByIdAndUpdate();
});

User.route('findById/:id', (req, res) => {
  User.findById({ _id: req.params.id }, async (err, User) => {
    if (err) {
      return res.status(500).json({ error: [err] });
    }
    res.status(200).send(User);
  });
});

User.route('findAll', async (req, res) => {
  User.find((err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(user);
  });
});

User.route('count', async (req, res) => {
  User.countDocuments((error, value) => {
    if (error) {
      res.status(500).send({ errors: [error] });
    } else {
      res.send({ value });
    }
  });
});

module.exports = User;
