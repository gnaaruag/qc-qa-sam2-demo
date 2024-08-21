import { Document, model, Schema } from "mongoose";

export type User = {
  email: string;
  password: string;
  avatar: string;
};

export interface UserModel extends User, Document {}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = model<UserModel>("User", userSchema);

export default User;

