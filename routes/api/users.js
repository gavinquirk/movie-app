const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../../models/User');

// Load input validation
const validateRegisterInput = require('../../validation/register');

// Register User
// TODO: hash passwords before storing
router.post('/register', (req, res) => {
  // Validation
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    // If user already exists
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      // If user doesn't exist
      // Create new User using submitted data
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      // Generate salt for password storage
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json({ id: user._id }))
            .catch((error) => console.log(error));
        });
      });
    }
  });
});

module.exports = router;
