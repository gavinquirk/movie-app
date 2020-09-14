require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Initialize server
const app = express();

// Apply middleware
app.use(cors());

// Routes
app.get('/', function (req, res) {
  res.json({ msg: 'Hello World' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
