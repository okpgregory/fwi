"use server";

import { connectToDatabase } from "@/lib/database";
import { Category } from "@/lib/database/models/blog/Category";
import { Post } from "@/lib/database/models/blog/Post";
import { PostPost } from "@/types";
import { handleError } from "@/utils";
import { FaGalacticSenate } from "react-icons/fa6";

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

export const getAllPosts = async () => {
  try {
    await connectToDatabase();
    const posts = await Post.find().populate("category");
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    handleError(error);
  }
};

export const getPost = async (slug: string) => {
  try {
    await connectToDatabase();
    const post = await Post.findOne({ slug }).populate("category");
    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    handleError(error);
  }
};

export const getFeaturedPost = async () => {
  try {
    await connectToDatabase();
    const featuredPost = await Post.findOne({ featured: true }).populate({
      path: "category",
      model: Category,
    });
    return JSON.parse(JSON.stringify(featuredPost));
  } catch (error) {
    handleError(error);
  }
};

export const setFeaturedPost = async (id: string) => {
  try {
    await connectToDatabase();
    const featuredPost = await Post.findOne({ featured: true });
    if (featuredPost) {
      featuredPost.featured = false;
      await featuredPost.save();
    }
    const newFeaturedPost = await Post.findById(id);
    newFeaturedPost.featured = true;
    await newFeaturedPost.save();
    return JSON.parse(JSON.stringify(newFeaturedPost));
  } catch (error) {
    handleError(error);
  }
};
