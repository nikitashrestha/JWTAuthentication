const express = require('express');
const userController = require('./../controllers/user.controller');
const authenticate = require('./../Middlewares/user.authenticate');

const router = express.Router();

router.post('/signup', userController.signup);


router.post('/signin', authenticate.authenticateUser, userController.signin);

router.get('/create', authenticate.authorize, userController.createPost);


module.exports = router;