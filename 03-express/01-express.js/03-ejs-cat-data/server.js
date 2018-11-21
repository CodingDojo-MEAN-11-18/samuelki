var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', function (request, response) {
  response.render('cats');
});

app.get('/cat1', function (request, response) {
  var cat_array = [
    {image: '/images/cat1.jpg', name: "Rick", favorite_food: "Spaghetti", age: "2", favorite_toy: "Ball"}
  ];
  response.render('details', {cat: cat_array});
})

app.get('/cat2', function (request, response) {
  var cat_array = [
    {image: '/images/cat2.jpg', name: "Billy", favorite_food: "Tuna", age: "4", favorite_toy: "Shoe"}
  ];
  response.render('details', {cat: cat_array});
})

app.get('/cat3', function (request, response) {
  var cat_array = [
    {image: '/images/cat3.jpg', name: "Charlie", favorite_food: "Chicken", age: "1", favorite_toy: "Mouse"}
  ];
  response.render('details', {cat: cat_array});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
});