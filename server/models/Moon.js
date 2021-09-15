import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MoonSchema = new Schema({
  name: { type: String, required: true },
  starId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Star' },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
  planetId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Planet' }
})

MoonSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})

MoonSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})

MoonSchema.virtual('star', {
  localField: 'starId',
  foreignField: '_id',
  justOne: true,
  ref: 'Star'
})
