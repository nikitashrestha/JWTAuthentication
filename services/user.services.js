const usersDao = require('./../dao/users.dao');


function createUser(user){
  return usersDao.create(user);
}


function findUser(user){
  return usersDao.findUser(user);
}



module.exports = {createUser, findUser};