import { Document, model, models, Schema } from "mongoose";
import { IPost } from "./Post";

export interface ICategory extends Document {
  _id: string;
  slug: string;
  title: string;
  img: string;
  posts: IPost;
}

const CategorySchema = new Schema({
  slug: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  img: { type: String },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

export const Category = models?.Category || model("Category", CategorySchema);
