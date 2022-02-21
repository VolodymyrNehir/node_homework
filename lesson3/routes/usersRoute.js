const {Router} = require('express');
let users = require('../db/users');

userRouter = Router();

userRouter.get('/', ({query}, res) => {
    if (query.city) {
        res.render("users", {users: users.filter(user => user.city === query.city)})
        return
    }
    if (query.age) {
        res.render("users", {users: users.filter(user => user.age === query.age)})
        return
    }
    res.render("users", {users});
});

userRouter.get('/:id',(req, res) => {
    const params = req.params;
    if (users[params.id - 1]) {

        res.render("userInfo", {user: users[params.id - 1]})
        return
    }
});

userRouter.post('/:id',(req, res) => {
    const deleteUser = [...users].filter(user => user.id.toString() !== req.params.id);
    users = deleteUser;
    res.redirect("/users");
})

module.exports = userRouter