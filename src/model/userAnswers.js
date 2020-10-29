const db = require('../database/connection');

const insertAnswers = (user_id, q1a1, q1a2, q2a1, q2a2, q3a1, q3a2) => {
  return db
    .query(
      'INSERT INTO challenges(user_id, q1a1, q1a2, q2a1, q2a2, q3a1, q3a2) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [user_id, q1a1, q1a2, q2a1, q2a2, q3a1, q3a2]
    )
    .then(res => res.rows[0])
    .catch(error => error);
};

const getAnswers = user_id => {
  return db
    .query('SELECT * FROM challengers WHERE user_id = ($1)', [user_id])
    .then(res => {
      return res.rows[0];
    })
    .catch(error => error);
};

module.exports = { insertAnswers, getAnswers };
