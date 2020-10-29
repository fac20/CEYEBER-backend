const test = require('tape');
const supertest = require('supertest');
const server = require('../server');
// const usersHandlers = require('./../handlers/users');
// const skillsHandlers = require('./../handlers/skills');
// const challengesHandlers = require('./../handlers/challenges');

test('Sanity check', t => {
  let num = 2;
  t.equal(num, 2, 'Should return 2');
  t.end();
});

test('get home route returns 200 status code', t => {
  supertest(server)
    .get('/')
    .expect(200)
    .expect('content-type', 'text/html; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.equal(res.text, 'Hello');
      t.end();
    });
});

test('Post to user route with conflicting username returns 409 status code', t => {
  const duplicateUser = {
    agent: 'TestFox',
    age: 14,
    location: 'Spain'
  };

  supertest(server)
    .post('/user')
    .send(duplicateUser)
    .expect(409)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err, res) => {
      t.error(err);
      t.equal(
        res.body.message,
        'Someone already picked this agent name! Pick another'
      );
      t.end();
    });
});
