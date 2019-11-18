const userServices = require('./../services/user.services');

function signup(req, res, next){
  return userServices
  .createUser(req.body)
  .then(data => { res.json({"message": "New user Created","data" : data});})
  .catch(err => {res.json({"message": "Unable to create new user","error" : err});});
}


function signin(req, res, next){
  return userServices
  .findUser(req.body)
  .then(data => {res.json({"message": "Welcome" + data.name});})
  .catch(err => {res.json({"message": "Incorrect email or password"});});
}

module.exports = {
  signup, signin
}