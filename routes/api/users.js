const express = require('express');
const router = express.Router();

// Load User Model
const User = require('../../models/User');

// Register User
// TODO: hash passwords before storing, validation
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    // If user already exists
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      // If user doesn't exist
      console.log(req.body);
      // Create new User using submitted data
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      newUser
        .save()
        .then((user) => res.json(user))
        .catch((error) => console.log(error));
    }
  });
});

module.exports = router;
