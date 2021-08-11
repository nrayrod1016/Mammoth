import { Profile } from '../models/profile.js'
import { Shop } from '../models/shop.js'
import { Product } from '../models/product.js'
import { Review } from '../models/review.js'
import { Order } from '../models/order.js'

export {
  recentActivity,
}

function recentActivity(req, res) {
  Profile.findById(req.user.profile)
  .populate('orders')
  .populate('shops')
  .populate('reviews')
  .populate('cart')
  .populate('wishlist')
  .then(profile => {
    Shop.find({})
    .limit(10)
    .populate('products')
    .populate('reviews')
    .sort({ createdAt: -1})
    .then(shops => {
      Product.find({ inventory: {$gt: 0 } })
      .sort({ createdAt: -1})
      .limit(25)
      .populate('reviews')
      .then(products => {
        let data = {products, shops, profile}
        res.json(data)
      })
    })
  })
}