const {Router} = require('express');
const userRouter = require('./usersRoute');
const loginRouter = require('./loginRoute');
const signInRouter = require('./signInRoute')
const express = require("express");

const app = express();
const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signin', signInRouter)

app.use((req, res) => {
        res.redirect("/err");
    }
);

app.get("/err", (req, res) => {
    res.render("err", {err: "notFound"});
});

module.exports = routes;