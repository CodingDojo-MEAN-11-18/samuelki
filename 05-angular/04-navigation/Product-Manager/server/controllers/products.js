const Product = require('mongoose').model('Product');

module.exports = {
  index(req, res) {
    Product.find({})
      .then(products => {
        console.log('Got products!', products);
        res.json({ products });
      })
      .catch(error => console.log(error));
  },
  show(req, res) {
    Product.findById(req.params.id)
      .then(product => {
        console.log('Found product!', product);
        res.json({ product });
      })
      .catch(error => console.log(error));
  },
  create(req, res) {
    Product.create(req.body)
      .then(product => {
        console.log(`Created product: ${product}`);
      })
      .catch(error => console.log(error));
  },
  edit(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(product => res.json({ product }))
      .catch(error => console.log(error));
  },
  delete(req, res) {
    Product.findByIdAndRemove(req.params.id)
      .then(product => res.json({ product }))
      .catch(error => console.log(error));
  }
};
