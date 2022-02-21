const {Router} = require('express');
let users = require('../db/users');
const signInController = require('../controllers/signInController');
const singInValid = require('../middleware/singInValid');

signInRouter = Router();

signInRouter.get('/', signInController.signInRender);

signInRouter.post('/', singInValid, signInController.signInFilter);

signInRouter.get('/:id', signInController.deleteUser);

module.exports = signInRouter;
