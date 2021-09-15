import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SpeciesSchema = new Schema({
  name: { type: String, required: true },
  starId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Star' },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
  planetId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Planet' },
  moonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Moon' }
})
SpeciesSchema.virtual('moon', {
  localField: 'moonId',
  foreignField: '_id',
  justOne: true,
  ref: 'Moon'
})

SpeciesSchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})

SpeciesSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})

SpeciesSchema.virtual('star', {
  localField: 'starId',
  foreignField: '_id',
  justOne: true,
  ref: 'Star'
})
