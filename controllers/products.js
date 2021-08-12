import { Profile } from '../models/profile.js'
import { Product } from '../models/product.js'
import { Shop } from '../models/shop.js'


export {
  create,
  index,
  update,
  createProperty,
  updateProperty,
  deleteProperty,
}

function deleteProperty (req, res) {
  Product.findById(req.params.productid)
  .then(product => {
    product.properties.remove({ _id: req.params.propertyid})
    product.save()
    .then(product => {
      res.json(product)
    })
  })
}

function updateProperty(req, res) {
  Product.findById(req.params.productid)
  .then(product => {
    product.properties.remove(req.params.propertyid)
    product.properties.push(req.body)
    product.save()
    .then(product => {
      res.json(product)
    })
  })
}

function createProperty (req, res) {
  Product.findById(req.params.id)
  .then(product => {
    product.properties.push(req.body)
    product.save()
    .then(product => {
      res.json(product)
    })
  })
  .catch(err => console.log(err))
}

function update(req, res) {
  Product.findByIdAndUpdate(req.params.productid, req.body, {new: true})
  .then(product => {
    res.json(product)
  })
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