import mongoose from 'mongoose'



const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNum: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,  
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  description: String,
  tags: [{
    type: String,
    enum: ["Health", "Beauty", "Technology", "Home", "Bath", "Furniture", "Appliances", "Baby", "Books", "CD", "Handmade", "Art", "Automotive", "Sports", "Grocery", "Music Instruments", "Office", "Tools", "Toys", "Pet", "Games"]
  }],
  minorityOwned: {
    type: [String],
    enum: ["blackOwned", "lgbtOwned", "womanOwned"]
  },
  logo: {
    type: String,
    default: "https://i.imgur.com/Mt0TN4R.png"
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review"
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  }
}, {
  timestamps: true
});

const Shop = mongoose.model('Shop', shopSchema);

export {
  Shop
}