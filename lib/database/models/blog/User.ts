import { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  // Add other user fields as needed
});
