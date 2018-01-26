import { Document } from 'mongoose';
import { Timestamp } from 'bson';

export interface IUser extends Document {
  _id: String,
  password: String,
  email: String,
  username: String,
  name: String,
  timestamp: Timestamp,
  comparePassword: (candidatePassword: string, callback: (err, result)=>{}) => boolean 
}