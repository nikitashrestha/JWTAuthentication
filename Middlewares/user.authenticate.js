
const userServices = require('./../services/user.services');
const jwtTokn = require('jsonwebtoken');
const configure =  require('./../config');

function authenticateUser(req, res, next){
  console.log("inside authenticate");
  userServices.findUser(req.body)
  .then(data => {
    next();
  })
  .catch(err => {
    res.json({"msg" : "Incorrect username and password"});
  });
}

function authorize(req, res, next){
  console.log('sut');
  var token = req.headers['authorization'];
  console.log(token);
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwtTokn.verify(token, configure, {algorithm: 'SH256'}, function(err, decoded){
    if(err) {
      next(err);
    }else{
      console.log(decoded);
      next();
    }
  });
}

module.exports = {
  authenticateUser, authorize
}