const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser")
const port = process.env.PORT || 8000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

let info = '';

app.get('/people', (req, res) => {
  info = 'people';
  axios.get('https://swapi.co/api/people/')
  .then(content => {
    res.json(content.data);
  })
  .catch(error => {
    res.json(error);
  })
});

app.get('/planets', (req, res) => {
  info = 'planets'
  axios.get('https://swapi.co/api/planets/')
  .then(content => {
    res.json(content.data);
  })
  .catch(error => {
    res.json(error);
  })
});

app.get('/previous', (req, res) => {
  console.log(req.query);
  let currentpage = `https://swapi.co/api/${info}?page=${req.query.page}`;
  axios.get(currentpage)
  .then(content => {
    res.json(content.data);
  })
  .catch(error => {
    res.json(error);
  })
});

app.get('/next', (req, res) => {
  console.log(req.query);
  let currentpage = `https://swapi.co/api/${info}?page=${req.query.page}`;
  axios.get(currentpage)
  .then(content => {
    res.json(content.data);
  })
  .catch(error => {
    res.json(error);
  })
});

app.get('/all', (req, res) => {
  axios.get(`https://swapi.co/api/${info}`)
  .then(content => {
    if (content.data.next === null) {
      return;
    };
    res.json(content.data);
    axios.get(`'${content.data.next}'`);
    res.json(content.data);
  })
  .catch(error => {
    res.json(error);
  })
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));