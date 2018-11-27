const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const parser = require('body-parser');
const app = express();

app.use(parser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const route = require('./routes/index.js')(app, server);