const { sendUserInfo, getUser} = require('../model/userInfo');

const createUser = (req, res, next) => {
  const agent = req.body.agent;
  const age = req.body.age;
  const location = req.body.location;
// check if user exists
getUser(agent)
.then(user => {
  if (user) {
    res.status(409).send({message: 'Someone already picked this agent name! Pick another'});
  }
  else {
    sendUserInfo(agent, age, location)
    .then(user => {
      res.status(201).send({
        message: 'user created',
        id: user.id
      });
    })
    .catch(next);
  }
})
.catch(next);

};

module.exports = createUser;
