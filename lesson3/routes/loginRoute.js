const {Router} = require('express');
let users = require('../db/users');

loginRouter = Router();

let id = 0;

loginRouter.get('/',(req, res) => {
    res.render("login")
});

loginRouter.post('/',(req, res) => {
    const email = users.some(user => user.email === req.body.email);

    if (email) {
        res.redirect("/err")
        return
    }
    res.redirect("/users");
    users.push({...req.body, id: ++id}
    );
});

module.exports = loginRouter
