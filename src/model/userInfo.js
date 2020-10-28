const db = require('../database/connection');

//add the date here

const sendUserInfo = (alias, age, location) => {
  return db
    .query(
      'INSERT INTO users(alias, age, location) VALUES ($1, $2, $3) RETURNING *',
      [alias, age, location]
    )
    .then(res => res.rows[0]);
};

module.exports = sendUserInfo;
