const user = require('../model/userInfo');

const createUser = (req, res, next) => {
  const alias = req.body.alias;
  const age = req.body.age;
  const location = req.body.location;

  user(alias, age, location, created_at)
    .then(user => {
      res.status(201).send({
        message: 'user created',
        id: user.id
      });
    })
    .catch(next);
};

module.exports = createUser;
