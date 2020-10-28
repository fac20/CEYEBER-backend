const test = require('tape');
const build = require('../database/build');
const userInfoModel = require('../userInfo');
const userSkills = require('../userSkills');
const userAnswers = require('../userAnswers');
const db = require('./database/connection');

// test('Close DB pool (not a real test)', t => {
//     // otherwise tests will pause for 10s in the terminal
//     db.end();
//     t.end();
//   });
