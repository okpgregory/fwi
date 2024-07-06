import { Document, model } from "mongoose";
import { models, Schema } from "mongoose";
import { ICategory } from "./Category";
import { IComment } from "./Comment";

export interface IPost extends Document {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  categorySlug: string;
  category: ICategory;
  comments: IComment;
  createdAt: Date;
}

const PostSchema = new Schema({
  slug: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  views: { type: Number, default: 0 },
  categorySlug: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: () => Date.now() },
});

export const Post = models.Post || model("Post", PostSchema);
