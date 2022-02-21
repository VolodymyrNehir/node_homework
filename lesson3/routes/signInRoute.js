const {Router} = require('express');
let users = require('../db/users');
const signInController = require('../controllers/signInController');

signInRouter = Router();

signInRouter.get('/', signInController.signInRender);

signInRouter.post('/', signInController.signInFilter);

signInRouter.get('/:id', signInController.deleteUser);

module.exports = signInRouter;
