import mongoose from 'mongoose';

const appSchema = new mongoose.Schema({
  name: { type: String, required: true },
  version: { type: String },
  deployed: { type: Boolean, default: false }
});

const App = mongoose.model('App', appSchema);
export default App;


