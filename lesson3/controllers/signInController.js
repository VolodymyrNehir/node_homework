let users = require('../db/users');

class signInController {
    signInRender (req, res) {
    res.render("signIn");
}

signInFilter (req, res)  {
    const {passworld, email} = req.body;
const sig = [...users].filter(user => user.email === email && user.passworld === passworld);
res.redirect(`/users/${sig[0].id}`);
}

deleteUser (req, res) {
    const deleteUser = [...users].filter(user => user.id.toString() !== req.params.id);
    users = deleteUser;
    res.redirect("/users");
}

}

module.exports = new signInController();