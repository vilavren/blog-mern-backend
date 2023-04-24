import mongoose from 'mongoose'

const CommentsSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    imageUrl: String,
  },
  { timestamps: true }
)

export default mongoose.model('Comments', CommentsSchema)
