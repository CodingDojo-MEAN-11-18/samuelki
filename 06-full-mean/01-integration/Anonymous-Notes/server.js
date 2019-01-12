const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.resolve('anonymouse-notes/dist/anonymous-notes')));

require('./server/config/database');
app.use('/api', require('./server/routes'));
// app.use(require('./server/routes/catch-all.route'));

app.listen(port, () => console.log(`Listening on port ${port}`));
