const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.resolve('public/dist/public')));

require('./server/config/database');
app.use(require('./server/routes'));

app.all('*', (request, response, next) => {
  response.sendFile(path.resolve('./dist/public/index.html'));
  console.log(request.url);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
