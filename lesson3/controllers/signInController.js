let users = require('../db/users');

class signInController {
    signInRender(req, res) {
        res.render("signIn");
    }

    signInFilter(req, res) {
        const {passworld, email} = req.body;
        const sig = users.find(user => user.email === email && user.passworld === passworld);
        if (sig) {
            res.redirect(`/users/${sig.id}`);
        } else {
            res.redirect('/err')
        }


    }

    deleteUser(req, res) {
        const deleteUser = [...users].filter(user => user.id.toString() !== req.params.id);
        users = deleteUser;
        res.redirect("/users");
    }

}

module.exports = new signInController();