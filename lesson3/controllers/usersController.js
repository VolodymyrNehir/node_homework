let users = require('../db/users');

class usersController {
    userFilter({query}, res) {
        if (query.city) {
            res.render('users', {users: users.filter(user => user.city === query.city)})
            return
        }
        if (query.age) {
            res.render('users', {users: users.filter(user => user.age === query.age)})
            return
        }
        res.render('users', {users});
    }

    usersGetId(req, res) {
        const params = req.params;
        if (users[params.id - 1]) {

            res.render('userInfo', {user: users[params.id - 1]})
            return
        } else {
            res.redirect('/err')
        }
    }

    usersFilterId(req, res) {
        const deleteUser = [...users].filter(user => user.id.toString() !== req.params.id);
        users = deleteUser;
        res.redirect('/users');
    }
}

module.exports = new usersController();