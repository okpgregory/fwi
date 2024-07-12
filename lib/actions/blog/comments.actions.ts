import { connectToDatabase } from "@/lib/database";
import { Comment } from "@/lib/database/models/blog/Comment";
import { handleError } from "@/utils";

export const createComment = async () => {
  try {
    await connectToDatabase();
    const newComment = await Comment.create();
  } catch (error) {
    handleError(error);
  }
};
