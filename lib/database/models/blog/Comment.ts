import { model } from "mongoose";
import { models, Schema } from "mongoose";
import { IPost } from "./Post";
import { IUser } from "./User";

export interface IComment extends Document {
  _id: string;
  desc: string;
  userEmail: string;
  user: IUser;
  postSlug: string;
  post: IPost;
  createdAt: Date;
}

const CommentSchema = new Schema({
  desc: { type: String, required: true },
  userEmail: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  postSlug: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  createdAt: { type: Date, default: () => Date.now() },
});

export const Comment = models.Comment || model("Comment", CommentSchema);
