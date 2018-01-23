import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  username: {
    type: String,
    default: '',
    trim: true,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    default: '',
    trim: true,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    default: '',
    required: true
  }
});

const UserModelClass = mongoose.model('User', UserSchema);

export default UserModelClass;