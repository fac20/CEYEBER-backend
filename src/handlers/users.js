const user = require('../model/userInfo');

const createUser = (req, res, next) => {
  const alias = req.body.alias;
  const age = req.body.age;
  const location = req.body.location;
  const created_at = req.body.created_at;

  user(alias, age, location, created_at)
    .then(() => {
      res.status(201).send({
        message: 'user created'
      });
    })
    .catch(next);
};

module.exports = createUser;
