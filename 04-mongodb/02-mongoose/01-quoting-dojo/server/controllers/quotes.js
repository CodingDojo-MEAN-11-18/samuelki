const Quote = require('../models/quote');

module.exports = {
  index(req, res) {
    res.render('index');
  },
  show(req, res) {
    Quote.find({})
    .then(quotes => {
      res.render('quotes', {quotes: quotes});
    })
    .catch(error => {
      console.log(error);
      res.render('index');
    })
  },
  create(req, res) {
    const quote = new Quote({
      name: req.body.name,
      quote: req.body.quote
    });
    quote.save(function(error) {
      if (error) {
        for (var key in error.errors) {
          req.flash('errors', error.errors[key].message);
        }
        res.redirect('/');
      } else {
        res.redirect('/quotes');
      }
    })

    // quote.save()
    // .then(savedQuote => {
    //   console.log(savedQuote);
    //   res.redirect('/quotes');
    // })
    // .catch(error => {
    //   Object.keys(error.errors).map(key => req.flash('errors', error.errors[key].message));
    //   res.redirect('/');
    // });
  },
  destroy(req, res) {
    Quote.deleteMany({}, function(error) {
      if (error) {
        console.log(error);
      } else {
        res.redirect('/quotes');
      }
    });
  }

};