import mongoose from 'mongoose'



const orderSchema = new mongoose.Schema({
  items: [{
    type: String,
    required: true,
    unique: true,
  }],
  address: String,
  country: String,
  zipcode: Number,
  price: Number,
  storeNames: [String]
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export {
  Order
}