const createSkills = require('../model/userSkills');

const sendSkills = (req, res, next) => {
  const user_id = req.body.user_id;
  const facebook = req.body.facebook;
  const instagram = req.body.instagram;
  const snapchat = req.body.snapchat;
  const tiktok = req.body.tiktok;
  const twitter = req.body.twitter;
  const whatsApp = req.body.whatsApp;
  const youtube = req.body.youtube;

  createSkills(
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
