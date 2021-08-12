import { Review } from "../models/review.js";
import { Profile } from '../models/profile.js'
import { Product } from "../models/product.js";
import { Shop } from "../models/shop.js";

export {
  create,
}

function create(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    if (req.params.type === "Shop") {
      req.body.shop = req.params.id
      let review = new Review(req.body)
      review.save()
      .then(review => {
        profile.reviews.push(review._id)
        profile.save()
        .then(profile => {
          Shop.findById(req.params.id)
          .then(shop => {
            shop.reviews.push(review._id)
            shop.save()
            .then(shop => {
              let data = {shop, profile, review}
              res.json(data)
            })
          })
        })
      })
    } 
    else if (req.params.type === "Product") {
      req.body.product = req.params.id
      let review = new Review(req.body)
      review.save()
      .then(review => {
        profile.reviews.push(review._id)
        profile.save()
        .then(profile => {
          Product.findById(req.params.id)
          .then(product => {
            product.reviews.push(review._id)
            product.save()
            .then(product => {
              let data = {product, review, profile}
              res.json(data)
            })
          })
        })
      })
    }
  })
}