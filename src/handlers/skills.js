const userSkills = require('../model/userSkills');

const sendSkills = (req, res, next) => {
  const user_id = req.user_id;
  const facebook = req.facebook;
  const instagram = req.instagram;
  const snapchat = req.snapchat;
  const tiktok = req.tiktok;
  const twitter = req.twitter;
  const whatsApp = req.whatsApp;
  const youtube = req.youtube;

  userSkills(
    user_id,
    facebook,
    instagram,
    snapchat,
    tiktok,
    twitter,
    whatsApp,
    youtube
  )
    .then(() => {
      res.status(201).send({
        message: 'skills sent'
      });
    })
    .catch(next);
};

module.exports = sendSkills;
