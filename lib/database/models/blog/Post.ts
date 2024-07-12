import { Document, model, models, Schema } from "mongoose";
import slugify from "slugify";
import { ICategory } from "./Category";
import { IComment } from "./Comment";

export interface IPost extends Document {
  _id: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  featured: boolean;
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
  featured: { type: Boolean, default: false },
  categorySlug: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
});

PostSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export const Post = models.Post || model("Post", PostSchema);
