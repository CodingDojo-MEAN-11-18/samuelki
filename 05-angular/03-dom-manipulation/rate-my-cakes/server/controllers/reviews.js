const Review = require('mongoose').model('Review');
const Cake = require('mongoose').model('Cake');

module.exports = {
  create(req, res) {
    console.log('Creating review', req.body);
    Review.create(req.body)
      .then(review => {
        console.log('Review created', review);
        return Cake.findById(req.params.id)
          .then(cake => {
            cake.reviews.push(review.id);
            return cake.save();
          })
          .then(() => {
            res.json({createdReview: review});
          })
      })
      .catch(error => res.json(error));
  }
};
