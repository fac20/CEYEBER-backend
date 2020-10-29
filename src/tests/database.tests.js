const test = require('tape');
const build = require('../database/build');
const userInfoModels = require('../model/userInfo');
const userSkillsModels = require('../model/userSkills');
const userAnswersModels = require('../model/userAnswers');
const db = require('../database/connection');

test('Post to user route with unique username inserts into database', t => {
  //rebuilding db each time- this user is always unique!
  const agent = 'testUser123';
  const age = 12;
  const location = 'France';

  build()
    .then(() => {
      userInfoModels.sendUserInfo(agent, age, location).then(res => {
        t.equal(
          res.agent,
          'testUser123',
          `Test user is in username with user id of ${res.id}`
        );
        t.end();
      });
    })
    .catch(err => {
      t.error(err);
      t.end();
    });
});

test('Post skills to skills table inserts correctly', t => {
  const user_id = 1;
  const facebook = 2;
  const instagram = 5;
  const snapchat = 3;
  const tiktok = 1000;
  const twitter = 1;
  const whatsapp = 5;
  const youtube = 4;

  build()
    .then(() => {
      userSkillsModels
        .createSkills(
          user_id,
          facebook,
          instagram,
          snapchat,
          tiktok,
          twitter,
          whatsapp,
          youtube
        )
        .then(res => {
          t.equal(
            res.user_id,
            1,
            `User with id of ${res.user_id} has had skills inserted 
            into the skills table with off the charts TikTok skills
            of ${res.tiktok}`
          );

          t.end();
        });
    })
    .catch(err => {
      t.error(err);
      t.end();
    });
});

test('Post to answers route inserts into database', t => {
  const user_id = 2;
  const q1a1 = 3;
  const q1a2 = null;
  const q2a1 = 2;
  const q2a2 = 3;
  const q3a1 = 4;
  const q3a2 = 27;

  build()
    .then(() => {
      userAnswersModels
        .insertAnswers(user_id, q1a1, q1a2, q2a1, q2a2, q3a1, q3a2)
        .then(res => {
          t.equal(
            res.user_id,
            2,
            `User with id of  ${res.user_id} has had 
            answers inserted into the database 
            with maximum password skills of 
            ${res.q3a2}`
          );
          t.end();
        });
    })
    .catch(err => {
      t.error(err);
      t.end();
    });
});

test('Close DB pool', t => {
  db.end();
  t.end();
});
