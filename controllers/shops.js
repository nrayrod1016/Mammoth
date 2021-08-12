import { Profile } from '../models/profile.js'
import { Shop } from '../models/shop.js'
import { Product } from '../models/product.js'

export {
  create,
  index,
  update,
}

function update(req, res) {
  Shop.findByIdAndUpdate(req.params.shopid, req.body, {new: true})
  .then(shop => {
    res.json(shop)
  })
}

function index (req, res) {
  Shop.find({})
  .populate('products')
  .populate('reviews')
  .sort({ createdAt: -1 })
  .then(shops => {
    res.json(shops)
  })
}

function create (req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    req.body.owner = profile._id
    let shop = new Shop(req.body)
    shop.save()
    .then(shop => {
      profile.shops.push(shop._id)
      profile.save()
      .then(profile => {
        const data = {shop, profile}
        res.json(data)
      })
    })
  })
}