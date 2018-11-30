const express = require('express'),
path = require('path'),
parser = require('body-parser'),
mongoose = require('mongoose'),
session = require('express-session'),
flash = require('express-flash'),
port = process.env.PORT || 8000,
app = express();

app.use(flash());
app.use(parser.urlencoded({extended: true}));
app.use(session({
  secret: 'thisisasecretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Comment name required']
  },
  comment: {
    type: String,
    required: [true, 'Comment required']
  }
});
const Comment = mongoose.model('Comment', CommentSchema);

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Message name required']
  },
  message: {
    type: String,
    required: [true, 'Message required']
  },
  comments: [CommentSchema]
});
const Message = mongoose.model('Message', MessageSchema);

app.get('/', function(req, res) {
  Message.find({}, function(err, info) {
    if (err) { console.log(err); }
    res.render('index', { info });
  });
});

app.post('/message', function(req, res) {
  const message = new Message({
    name: req.body.name,
    message: req.body.message
  });
  message.save(function(err) {
    if (err) {
      for (let key in err.errors) {
        req.flash('errors', err.errors[key].message);
      }
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  });
});

app.post('/comment', function(req, res) {
  const comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      for (let key in err.errors) {
        req.flash('errors', err.errors[key].message);
      }
      res.redirect('/');
    } else {
      return Message.findById(req.body.id)
        .then(message => {
          message.comments.push(comment);
          return message.save();
        })
          .then(() => {
            res.redirect('/');
          });
    }
  });
});


mongoose.connection.on('connected', () => console.log('mongo connected'));
app.listen(port, () => console.log(`Listening on port ${port}`));