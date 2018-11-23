const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/people', (req, res) => {
  axios.get('https://swapi.co/api/people/')
  .then(content => {
    res.json(content.data);
  })
  .catch(error => {
    console.log(error);
    res.json(error);
  })
});

app.get('/planets', (req, res) => {
  axios.get('https://swapi.co/api/planets/')
  .then(content => {
    res.json(content.data);
  })
  .catch(error => {
    res.json(error);
  })
});

app.get('/previous', (req, res) => {
  axios.get('https://swapi.co/api/people/')
  .then(content => {
    const previous = content.data.previous;
    if (previous != null) {
      axios.get(`${previous}`)
      .then(previouscontent => {
        res.json(previouscontent.data);
      })
    }
  })
  .catch(error => {
    res.json(error);
  })
});

app.get('/next', (req, res) => {
  axios.get('https://swapi.co/api/people/')
  .then(content => {
    const next = content.data.next;
    if (next != null) {
      axios.get(`${next}`)
      .then(nextcontent => {
        res.json(nextcontent.data);
      })
    }
  })
  .catch(error => {
    res.json(error);
  })
});

app.get('/all', (req, res) => {
  
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});