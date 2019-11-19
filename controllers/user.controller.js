const userServices = require('./../services/user.services');
const jwt = require('jsonwebtoken');
const config = require('./../config');


function signup(req, res, next){
  return userServices
  .createUser(req.body)
  .then(data => { res.json({"message": "New user Created","data" : data});})
  .catch(err => {res.json({"message": "Unable to create new user","error" : err});});
}


function signin(req, res, next){
  return userServices
  .findUser(req.body)
  .then(data => {
    var token = jwt.sign({id: data._id}, config, {algorithm: 'HS256', expiresIn: 120});
    res.status(200).json({"message": "Welcom", "auth" : true, "token": token});
  })
  .catch(err => {res.json({"message": "Incorrect email or password"});});
}

function createPost(req, res, next){
  res.json({"message": "Ok user authenticated"});
}

module.exports = {
  signup, signin, createPost
}