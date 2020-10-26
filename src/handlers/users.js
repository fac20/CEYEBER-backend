const user = require('../model/userInfo');

const createUser = (req, res, next) => {
  const user_id = req.user_id;
  const alais = req.alais;
  const age = req.age;
  const location = req.location;
  const created_at = req.created_at;

  user(alias, age, location, created_at)
    .then(() => {
      res.status(201).send({
        message: 'user created'
      });
    })
    .catch(next);
};

module.exports = createUser;
