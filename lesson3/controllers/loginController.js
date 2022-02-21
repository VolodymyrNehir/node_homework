const users = require('../db/users');

let id = 0;

class loginController {
    loginRender(req, res) {
        res.render("login")
    }

    loginFilterEmaile(req, res) {
        const email = users.some(user => user.email === req.body.email);

        if (email) {
            res.redirect("/err")
            return
        }
        res.redirect("/users");
        users.push({...req.body, id: ++id}
        );
    }
}

module.exports = new loginController();