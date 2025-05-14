import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  serialNumber: { type: String, required: true, unique: true },
  assigned: { type: Boolean, default: false },
  base: { type: mongoose.Schema.Types.ObjectId, ref: 'Base' }
});

const Asset = mongoose.model('Asset', assetSchema);
export default Asset;

