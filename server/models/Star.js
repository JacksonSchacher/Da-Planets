import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema({
  name: { type: String, required: true },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
})

StarSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})
