const express = require('express');
const app = express();
const createUser = require('./handlers/users');
const sendAnswers = require('./handlers/challenges');
const sendSkills = require('./handlers/skills');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.get('/', function (req, res) {
  res.send('Hello');
});

app.post('/user', createUser);
app.post('/skills', sendSkills);
app.post('/answers', sendAnswers);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
