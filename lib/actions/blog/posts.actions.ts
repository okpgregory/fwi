import { Category } from "@/lib/database/models/blog/Category";
import { IPost } from "./../../database/models/blog/Post";
import { connectToDatabase } from "@/lib/database";
import { Post } from "@/lib/database/models/blog/Post";
import { PostPost } from "@/types";
import { handleError } from "@/utils";

export const createPost = async (post: PostPost) => {
  try {
    await connectToDatabase();
    const categorySlugToFind = await Category.findById(post.category);
    const newPost = await Post.create({
      ...post,
      categorySlug: categorySlugToFind.slug,
    });
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    handleError(error);
  }
};

export const getPosts = async ({ page }: { page: number }) => {
  const POST_PER_PAGE = 2;

  try {
    await connectToDatabase();
    const posts = await Post.find()
      .skip(POST_PER_PAGE * page - 1)
      .limit(POST_PER_PAGE)
      .lean();
    const postsCount = await Post.countDocuments();
    return JSON.parse(JSON.stringify({ posts, postsCount }));
  } catch (error) {
    handleError(error);
  }
};
