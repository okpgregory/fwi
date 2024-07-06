import { connectToDatabase } from "@/lib/database";
import { Category } from "@/lib/database/models/blog/Category";
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

export const getPosts = async ({
  page,
  POST_PER_PAGE,
}: {
  page: number;
  POST_PER_PAGE: number;
}) => {
  try {
    await connectToDatabase();
    const posts = await Post.find()
      .skip(POST_PER_PAGE * (page - 1))
      .limit(POST_PER_PAGE)
      .lean()
      .populate("category");
    const postsCount = await Post.countDocuments();
    return JSON.parse(JSON.stringify({ posts, postsCount }));
  } catch (error) {
    handleError(error);
  }
};

export const getPost = async () => {
  try {
    await connectToDatabase();
    const post = await Post.findOne().populate("category");
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    handleError(error);
  }
};
