const express = require('express');
const app = express();
const createUser = require('./handlers/users');
const sendAnswers = require('./handlers/challenges');
const sendSkills = require('./handlers/skills');
const cors = require('cors');
require('dotenv').config();

const handleErrors = require('./middleware/errorHandling');

const corsOptions = {
  origin: 'ceyeber.netlify.app/',
  optionsSuccessStatus: 200
};

app.use(express.json());
app.use(handleErrors);
app.use(cors());

app.get('/', function (req, res) {
  res.status(200).send('Hello');
});

app.post('/user', createUser);
app.post('/skills', sendSkills);
app.post('/answers', sendAnswers);

module.exports = app;
