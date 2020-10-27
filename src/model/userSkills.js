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

module.exports = createSkills;
