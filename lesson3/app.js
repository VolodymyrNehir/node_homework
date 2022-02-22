const express = require('express');
const {engine} = require('express-handlebars');
const path = require('path');

const apiRoute = require('./routes/apiRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoute)

app.listen(1997, () => {
    console.log('PORT  1997');
});