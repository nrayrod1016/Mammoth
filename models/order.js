import mongoose from 'mongoose'



const orderSchema = new mongoose.Schema({
  items: [{
    type: String,
    required: true,
  }],
  address: String,
  country: String,
  zipcode: Number,
  price: Number,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  storeNames: [String],
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export {
  Order
}