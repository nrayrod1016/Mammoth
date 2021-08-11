import { Profile } from '../models/profile.js'
import { Shop } from '../models/shop.js'
import { Product } from '../models/product.js'

export {
  create,
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