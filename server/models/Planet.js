import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  starId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Star' },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
})

PlanetSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})

PlanetSchema.virtual('star', {
  localField: 'starId',
  foreignField: '_id',
  justOne: true,
  ref: 'Star'
})
