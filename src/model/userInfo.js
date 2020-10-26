const db = require('../database/connection');

const sendUserInfo = (alias, age, location, created_at) => {
  return db
    .query(
      'INSERT INTO users(alias, age, location, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
      [alias, age, location, created_at]
    )
    .then(res => res.rows[0]);
};

module.exports = sendUserInfo;
