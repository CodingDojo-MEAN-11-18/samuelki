const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/survey', (req, res) => {
  res.render('result', { content: req.body });;  
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});