import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  assetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Asset', required: true },
  assignedTo: { type: String, required: true },
  assignedDate: { type: Date, default: Date.now }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
export default Assignment;
