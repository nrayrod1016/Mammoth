import mongoose from 'mongoose'



const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    default: "User Didn't Leave A Comment"
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  images: [String],
  videos: [String],
  wouldRec: {
    type: Boolean,
    default: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);

export {
  Review
}