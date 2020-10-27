const userAnswers = require('../model/userAnswers');

const sendAnswers = (req, res, next) => {
  const user_id = req.body.user_id;
  const q1a1 = req.body.q1a1;
  const q1a2 = req.body.q1a2;
  const q2a1 = req.body.q2a1;
  const q2a2 = req.body.q2a2;
  const q3a1 = req.body.q3a1;
  const q3a2 = req.body.q3a2;

  userAnswers(user_id, q1a1, q1a2, q2a1, q2a2, q3a1, q3a2)
    .then(() => {
      res.status(201).send({
        message: 'answer sent'
      });
    })
    .catch(next);
};

module.exports = sendAnswers;
