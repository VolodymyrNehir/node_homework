const {Router} = require('express');
let users = require('../db/users');
const loginController = require('../controllers/loginController');

loginRouter = Router();

loginRouter.get('/', loginController.loginRender);

loginRouter.post('/', loginController.loginFilterEmaile);

module.exports = loginRouter
