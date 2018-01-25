import { genSalt, hash } from 'bcrypt-nodejs';
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

UserSchema.pre('save', function (next) {
  const user = this;

  genSalt(10, function(err, salt) {
    if (err) return next(err);

    hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
  
      user.password = hash;
      next();
    });
  });
})

const UserModelClass = mongoose.model('User', UserSchema);

export default UserModelClass;