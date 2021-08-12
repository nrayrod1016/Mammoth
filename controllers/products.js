import { Profile } from '../models/profile.js'
import { Product } from '../models/product.js'
import { Shop } from '../models/shop.js'


export {
  create,
  index,
}

function index(req, res) {
  Product.find({ inventory: {$gt: 0 } })
  .populate({
    path: 'shop',
    model: "Shop",
    populate: {
      path: "owner",
      model: "Profile"
    }
  })
  .populate('reviews')
  .sort({ createdAt: -1})
  .then(products => {
    res.json(products)
  })
}

function create(req, res) {
  req.body.shop = req.params.shopid
  let product = new Product(req.body)
  product.save()
  .then(product => {
    Shop.findById(req.params.shopid)
    .then(shop => {
      shop.products.push(product._id)
      shop.save()
      .then(shop => {
        let data = {shop, product}
        res.json(data)
      })
    })
  })
}