import mongoose from 'mongoose'

const propertiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  options: [{
    type: String,
    required: true,
  }],
})

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tags: [String],
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop"
  },
  desc: {
    type: String,
    required: true,
  },
  snippet: String,
  inventory: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "USD"
  },
  videos: [String],
  pictures: [String],
  properties: [propertiesSchema],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  }],
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export {
  Product
}