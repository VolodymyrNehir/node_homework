const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "static")));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let users = [];
let id = 0;

app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/login", (req, res) => {
    const email = users.some(user => user.email === req.body.email);

    if (email) {
        res.redirect("/err")
        return
    }
    res.redirect("/users");
    users.push({...req.body, id: ++id}
    );
});

app.get("/users", ({query}, res) => {
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

app.get("/users/:id", (req, res) => {
    const params = req.params;
    if (users[params.id - 1]) {

        res.render("userInfo", {user: users[params.id - 1]})
        return
    }
});

/////////// CLASS WORK \\\\\\\\\\\

app.get("/signin", (req, res) => {
    res.render("signIn");
});

app.post("/signin", (req, res) => {
    const {passworld, email} = req.body;
    const sig = [...users].filter(user => user.email === email && user.passworld === passworld);
    res.redirect(`/users/${sig[0].id}`);
});
// sign in

app.post("/users/:id", (req, res) => {
    const deleteUser = [...users].filter(user => user.id.toString() !== req.params.id);
    users = deleteUser;
    res.redirect("/users");
});
// delete

app.use((req, res) => {
        res.redirect("/err");
    }
);

app.get("/err", (req, res) => {
    res.render("err", {err: "notFound"});
    return;
});
// error

app.listen(1997, () => {
    console.log("PORT  1997");
});