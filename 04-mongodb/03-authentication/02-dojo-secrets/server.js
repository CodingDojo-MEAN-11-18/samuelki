const express = require('express'),
path = require('path'),
parser = require('body-parser'),
session = require('express-session'),
flash = require('express-flash'),
mongoose = require('mongoose'),
bcrypt = require('bcryptjs'),
port = process.env.PORT || 8000,
app = express();

app.use(flash());
app.use(parser.urlencoded({extended: true}));
app.use(session({
  secret: 'thisisasecret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1800000 }
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: [true, 'Comment must not be blank']
  }
});
const Comment = mongoose.model('Comment', CommentSchema);

const SecretSchema = new Schema({
  secret: {
    type: String,
    required: [true, 'Secret must not be blank']
  },
  comments: [CommentSchema]
});
const Secret = mongoose.model('Secret', SecretSchema);

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name required'],
    minlength: [2, 'First name must be at least 2 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name required'],
    minlength: [2, 'Last name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password required']
  },
  secrets: [SecretSchema]
});
const User = mongoose.model('User', UserSchema);


app.get('/', function(req, res) {
  if (req.session.userID) {
    res.redirect('/home')
  } else {
    res.render('index');
  }
});

app.post('/register', function(req, res) {
  // check if user is already registed using User.find
  User.find({ email: req.body.email })
  .then((result) => {
    if (result.length === 0) {
      console.log('email not found');
      bcrypt.hash(req.body.password, 10)
      .then(hashedPW => {
        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hashedPW
        });
        user.save()
        .then(() => {
          req.session.userID = user.id;
          res.redirect('/home');
        })
        .catch(error => {
          console.log(error);
          Object.keys(error.errors).map(key => req.flash('errors', error.errors[key].message));
          res.redirect('/');
        });
      })
      .catch(error => {
        console.log(error);
      });
    } else {
      console.log('email already in use');
      res.redirect('/');
    }
  })
  .catch(error => {
    console.log(error);
  });
});

app.post('/login', function(req, res) {
  User.findOne({ email:req.body.email })
  .then(result => {
    if (result.length === 0) {
      console.log('email not registered');
      res.redirect('/');
    } else {
      userID = result.id;
      bcrypt.compare(req.body.password, result.password)
      .then(result => {
        if (result) {
          req.session.userID = userID;
          res.redirect('/home');
        } else {
          res.redirect('/');
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  })
  .catch(error => {
    console.log(error);
  });
});

app.get('/home', function(req, res) {
  if (req.session.userID) {
    User.findById(req.session.userID)
    .then(result => {
      console.log(result);
      Secret.find({})
      .then(secrets => {
        res.render('secrets/index', { result, secrets });
      })
      .catch(error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  } else {
    res.redirect('/');
  }
});

app.post('/secrets', function(req, res) {
  const secret = new Secret(req.body);
  secret.save()
  .then(secret => {
    console.log('secret', secret);
    User.findById(req.session.userID)
    .then(user => {
      console.log(user);
      user.secrets.push(secret);
      user.save()
      .then(() => {
        res.redirect('/home');
      })
      .catch(error => {
        console.log(error);
      })
    })
    .catch(error => {
      console.log(error);
    })
  })
  .catch(error => {
    console.log(error);
    Object.keys(error.errors).map(key => req.flash('errors', error.errors[key].message));
    res.redirect('/home');
  });
});

app.get('/secrets/:id', function(req, res) {
  Secret.findById({ _id: req.params.id })
  .then(secret => {
    res.render('secrets/view', { secret });
  })
  .catch(error => {
    console.log(error);
  })
});

app.post('/comment', function(req, res) {
  const comment = new Comment({
    comment: req.body.comment
  });
  comment.save()
  .then(comment => {
    Secret.findById(req.body.id)
    .then(secret => {
      console.log('comment', comment);
      console.log('secret', secret);
      secret.comments.push(comment);
      secret.save()
      .then(() => {
        res.redirect('/home');
      })
      .catch(error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  })
  .catch(error => {
    console.log(error);
    Object.keys(error.errors).map(key => req.flash('errors', error.errors[key].message));
  })
});

app.get('/logout', function(req, res) {
  req.session.destroy();
  res.redirect('/');
})

app.get('/secrets/destroy/:id', function(req, res) {
  Secret.remove({ _id:req.params.id })
  .then(secret => {
    console.log(secret, "deleted");
    res.redirect('/home');
  })
  .catch(error => {
    console.log(error);
  });
});

mongoose.connect('mongodb://localhost/dojo_secrets');
mongoose.connection.on('connected', () => console.log('Mongo connected'));
app.listen(port, () => console.log(`Listening on port ${port}`));