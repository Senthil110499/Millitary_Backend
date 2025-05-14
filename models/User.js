import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    allowNull: false,
    unique: true,
  },
  password: {
    type: String,
    allowNull: false,
  },
  role: {
    type: String,
    allowNull: false,
    defaultValue: 'Logistics Officer',
  },
});

const User = mongoose.model('User', userSchema);
export default User;



