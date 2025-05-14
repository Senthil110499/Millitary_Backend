import mongoose from 'mongoose';

const transferSchema = new mongoose.Schema({
  assetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
  fromBase: { type: mongoose.Schema.Types.ObjectId, ref: 'Base' },
  toBase: { type: mongoose.Schema.Types.ObjectId, ref: 'Base' },
  transferDate: { type: Date, default: Date.now }
});

const Transfer = mongoose.model('Transfer', transferSchema);
export default Transfer;
