import { Document, model, models, Schema } from "mongoose";
import { IPost } from "./Post";
import slugify from "slugify";

export interface ICategory extends Document {
  _id: string;
  slug: string;
  title: string;
  posts: IPost;
  createdAt: Date;
}

const CategorySchema = new Schema({
  slug: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
});

CategorySchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

export const Category = models?.Category || model("Category", CategorySchema);
