import mongoose from 'mongoose';

const baseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true }
});

const Base = mongoose.model('Base', baseSchema);
export default Base;

