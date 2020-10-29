const db = require('../database/connection');

//add the date here

const sendUserInfo = (agent, age, location) => {
  return db
    .query(
      'INSERT INTO users(agent, age, location) VALUES ($1, $2, $3) RETURNING *',
      [agent, age, location]
    )
    .then(res => res.rows[0]);
};

const getUser = agent => {
  return db
    .query('SELECT * FROM users WHERE agent = ($1)', [agent])
    .then(user => {
      return user.rows[0];
    })
};

module.exports = { sendUserInfo, getUser };
