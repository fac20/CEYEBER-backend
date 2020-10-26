const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.get('/', function (req, res) {
  res.send('Hello');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
