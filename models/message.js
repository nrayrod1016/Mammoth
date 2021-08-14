import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  },
  message: String,
  channel: String,
}, {
  timestamps: true,
})

const Message = mongoose.model('Message', messageSchema)

export {
  Message
}