const {Router} = require('express');
let users = require('../db/users');
const loginController = require('../controllers/loginController');
const isUserValid = require('../middleware/isUserValid');

loginRouter = Router();

loginRouter.get('/', loginController.loginRender);

loginRouter.post('/',  isUserValid,loginController.loginFilterEmaile);

module.exports = loginRouter
