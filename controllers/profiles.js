import { Profile } from "../models/profile.js"
import { Product } from "../models/product.js"
import { Review } from "../models/review.js"
import { Shop } from "../models/shop.js"
import { Order } from "../models/order.js"

export {
  userProfile,
  update,
  show,
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  newOrder,
  removeOrder,
}

function removeOrder (req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.orders.remove(req.params.orderid)
    profile.populate({
      path: "reviews",
      populate: {
        path: "shop",
      }
    })
    .populate({
      path: "reviews",
      populate: {
        path: "product"
      }
    })
    .populate("orders")
    .populate({
      path: "shops",
      populate: {
        path: "products"
      }
    })
    .populate("cart")
    .populate("wishlist").execPopulate()
    profile.save()
    .then(profile => {
      res.json(profile)
    })
  })
}



function newOrder(req, res) {
  let productNames = []
  let shopNames = []
  Profile.findById(req.user.profile)
  .populate({
    path: "cart",
    populate: {
      path: "shop",
    }
  })
  .then(profile => {
    let price = 0
    profile.cart.forEach(product => {
      productNames.push(product.name)
      shopNames.push(product.shop.name)
      price = price + product.price
    })
    req.body.price = price
    req.body.profile = profile._id
    req.body.items = productNames
    req.body.storeNames = shopNames
    let order = new Order(req.body)
    order.save()
    .then(order => {
      Product.updateMany({_id: {$in: profile.cart}}, {$push: { orders: order._id}})
        .then(products => {
          profile.cart = []
          profile.orders.push(order._id)
          profile.populate({
            path: "reviews",
            populate: {
              path: "shop",
            }
          })
          .populate({
            path: "reviews",
            populate: {
              path: "product"
            }
          })
          .populate("orders")
          .populate({
            path: "shops",
            populate: {
              path: "products"
            }
          })
          .populate("cart")
          .populate("wishlist").execPopulate()
          profile.save()
          .then(profile => {
            let data = {profile, order}
            res.json(data)
          })
        })
    })
  })
}

function removeFromCart (req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.cart.remove(req.params.productid)
    profile.populate({
      path: "reviews",
      populate: {
        path: "shop",
      }
    })
    .populate({
      path: "reviews",
      populate: {
        path: "product"
      }
    })
    .populate("orders")
    .populate({
      path: "shops",
      populate: {
        path: "products"
      }
    })
    .populate("cart")
    .populate("wishlist").execPopulate()
    profile.save()
    .then(profile => {
      Product.findById(req.params.productid)
      .then(product => {
          product.inventory = product.inventory + 1
          product.save()
          .then(product => {
            let data = {product, profile}
            res.json(data)
          })
      })
    })
  })
}

function removeFromWishlist(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.wishlist.remove({ _id: req.params.productid})
    profile.populate({
      path: "reviews",
      populate: {
        path: "shop",
      }
    })
    .populate({
      path: "reviews",
      populate: {
        path: "product"
      }
    })
    .populate("orders")
    .populate({
      path: "shops",
      populate: {
        path: "products"
      }
    })
    .populate("cart")
    .populate("wishlist").execPopulate()
    profile.save()
    .then(profile => {
      res.json(profile)
    })
  })
}

function addToWishlist(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.wishlist.push(req.params.productid)
    profile.populate({
      path: "reviews",
      populate: {
        path: "shop",
      }
    })
    .populate({
      path: "reviews",
      populate: {
        path: "product"
      }
    })
    .populate("orders")
    .populate({
      path: "shops",
      populate: {
        path: "products"
      }
    })
    .populate("cart")
    .populate("wishlist").execPopulate()
    profile.save()
    .then(profile => {
      res.json(profile)
    })
  })
}

function addToCart (req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.cart.push(req.params.productid)
    profile.populate({
      path: "reviews",
      populate: {
        path: "shop",
      }
    })
    .populate({
      path: "reviews",
      populate: {
        path: "product"
      }
    })
    .populate("orders")
    .populate({
      path: "shops",
      populate: {
        path: "products"
      }
    })
    .populate("cart")
    .populate("wishlist").execPopulate()
    profile.save()
    .then(profile => {
      Product.findById(req.params.productid)
      .then(product => {
        if(product.inventory > 0) {
          product.inventory = product.inventory - 1
          product.save()
          .then(product => {
            let data = {product, profile}
            res.json(data)
          })
        } else {
          res.status(400).send("Error! No Inventory")
        }
      })
    })
  })
}

function show (req, res) {
  Profile.findById(req.params.id)
  .populate({
    path: "reviews",
    populate: {
      path: "shop",
    }
  })
  .populate({
    path: "reviews",
    populate: {
      path: "product"
    }
  })
  .populate("orders")
  .populate({
    path: "shops",
    populate: {
      path: "products"
    }
  })
  .populate("cart")
  .populate("wishlist")
  .then(profile => {
    res.json(profile)
  })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.user.profile, req.body, {new: true})
  .then(profile => {
    profile.populate({
      path: "reviews",
      populate: {
        path: "shop",
      }
    })
    .populate({
      path: "reviews",
      populate: {
        path: "product"
      }
    })
    .populate("orders")
    .populate({
      path: "shops",
      populate: {
        path: "products"
      }
    })
    .populate("cart")
    .populate("wishlist").execPopulate()
    .then(profile => {
      res.json(profile)
    })
  })
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .populate({
    path: "reviews",
    populate: {
      path: "shop",
    }
  })
  .populate({
    path: "reviews",
    populate: {
      path: "product"
    }
  })
  .populate("orders")
  .populate({
    path: "shops",
    populate: {
      path: "products"
    }
  })
  .populate("cart")
  .populate("wishlist")
  .then(profile => {
    res.json(profile)
  })
}