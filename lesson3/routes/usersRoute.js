const {Router} = require('express');

const usersController = require('../controllers/usersController');

userRouter = Router();

userRouter.get('/', usersController.userFilter);

userRouter.get('/:id', usersController.usersGetId);

userRouter.post('/:id',usersController.usersFilterId);

module.exports = userRouter