const {Router} = require('express');
let users = require('../db/users');

signInRouter = Router();

let id = 0;

signInRouter.get('/',(req, res) => {
    res.render("signIn");
});

signInRouter.post('/',(req, res) => {
    const {passworld, email} = req.body;
    const sig = [...users].filter(user => user.email === email && user.passworld === passworld);
    res.redirect(`/users/${sig[0].id}`);
});

signInRouter.get('/:id',(req, res) => {
    const deleteUser = [...users].filter(user => user.id.toString() !== req.params.id);
    users = deleteUser;
    res.redirect("/users");
});

module.exports = signInRouter
