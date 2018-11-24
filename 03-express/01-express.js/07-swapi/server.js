const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const port = process.env.PORT || 8000;

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/people', (req, res) => {
  axios.get('https://swapi.co/api/people/')
  .then(content => {
    res.json(content.data);
  })
  .catch(error => {
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

// app.get('/previous', (req, res) => {
//   axios.get('https://swapi.co/api/people/')
//   .then(content => {
//     const previous = content.data.previous;
//     if (previous != null) {
//       axios.get(`${previous}`)
//       .then(previouscontent => {
//         res.json(previouscontent.data);
//       })
//     }
//   })
//   .catch(error => {
//     res.json(error);
//   })
// });

app.get('/next', (req, res) => {
  let currentpage = 'https://swapi.co/api/people?page=' + req.query.page;
  axios.get(currentpage)
  .then(content => {
    if (content.data.next = null) {
      return pass;
    };
    res.json(content.data);
  })
  .catch(error => {
    res.json(error);
  })
});

// app.get('/all', (req, res) => {
//   axios.get('https://swapi.co/api/people/')
//   .then(content => {
    
//   })
// });

app.listen(port, () => console.log(`Express server listening on port ${port}`));