import { Review } from "../models/review.js";
import { Profile } from '../models/profile.js'
import { Product } from "../models/product.js";
import { Shop } from "../models/shop.js";

export {
  create,
  deleteReview,
}

function deleteReview (req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    if(req.params.type === "Shop") {
      Shop.findById(req.params.id)
      .then(shop => {
        shop.reviews.remove(req.params.reviewid)
        shop.save()
        .then(shop => {
          profile.reviews.remove(req.params.reviewid)
          profile.save()
          .then(profile => {
            Review.findByIdAndDelete(req.params.reviewid)
            .then(review => {
              let data = {review, profile, shop}
              res.json(data)
            })
          })
        })
      })
    }
    else if (req.params.type === "Product") {
      Product.findById(req.params.id)
      .then(product => {
        product.reviews.remove(req.params.reviewid)
        product.save()
        .then(product => {
          profile.reviews.remove(req.params.reviewid)
          profile.save()
          .then(profile => {
            Review.findByIdAndDelete(req.params.reviewid)
            .then(review => {
              let data = {review, profile, product}
              res.json(data)
            })
          })
        })
      })
    }
  })
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