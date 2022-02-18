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
    console.log([...users])
});

app.get("/users", (req, res) => {
    res.render("users", {users})
});
app.get("/users/:id", (req, res) => {
    const params = req.params;
    if (users[params.id - 1]) {

        res.render("userInfo", {user: users[params.id - 1]})
        return
    };
});

// app.get("/login",({query},res)=>{
//   let  usersByQuery = [];
//     usersByQuery = users.filter(user=> user === query.city)
//     console.log(usersByQuery)


// });




app.listen(1997, () => {
    console.log("PORT  1997")
});