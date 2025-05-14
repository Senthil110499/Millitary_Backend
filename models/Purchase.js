import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  purchaseDate: { type: Date, default: Date.now }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
export default Purchase;

