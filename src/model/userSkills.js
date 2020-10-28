const db = require('../database/connection');

const createSkills = (
  user_id,
  facebook,
  instagram,
  snapchat,
  tiktok,
  twitter,
  whatsApp,
  youtube
) => {
  return db
    .query(
      'INSERT INTO skills(user_id, facebook, instagram, snapchat, tiktok, twitter, whatsApp, youtube) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [
        user_id,
        facebook,
        instagram,
        snapchat,
        tiktok,
        twitter,
        whatsApp,
        youtube
      ]
    )
    .then(res => res.rows[0])
    .catch(err => err);
};

const getSkills = user_id => {
  return db
    .query('SELECT * FROM skills WHERE user_id = ($1)', [user_id])
    .then(res => {
      return res.rows[0];
    })
    .catch(error => error);
};

module.exports = { createSkills, getSkills };
