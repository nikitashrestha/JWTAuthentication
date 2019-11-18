const User = require('./../Models/user.model');

function create(user){
  return new User({ name: user.name, email: user.email, password: user.password }).save();
}

function findUser(user){
  return new User({ name: user.name, password: user.password })
    .fetch()
    .then(user => user)
    .catch(User.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

module.exports = {
  create, findUser
}