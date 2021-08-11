import { Product } from '../models/product.js'
import { Shop } from '../models/shop.js'

export {
  search,
}

function search (req, res) {
  Shop.find({ name: { $regex: req.params.query} })
  .then(shops => {
    Product.find({ name: { $regex: req.params.query} })
    .then(products => {
      let data = {shops, products}
      res.json(data)
    })
  })
}