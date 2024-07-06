import { Document, model, models, Schema } from "mongoose";
import { IPost } from "./Post";

export interface ICategory extends Document {
  _id: string;
  slug: string;
  title: string;
  posts: IPost;
  createdAt: Date;
}

const CategorySchema = new Schema({
  slug: { type: String, unique: true, required: true },
  title: { type: String, unique: true, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  createdAt: { type: Date, default: () => Date.now() },
});

export const Category = models?.Category || model("Category", CategorySchema);
