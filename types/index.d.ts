import { ReactNode } from "react";

export type StringBooleanObjProp = { [key: string]: boolean };

export type SearchParamProps = {
  params: { id: string; page: string; cat: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type PostPost = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  views?: number;
  categorySlug?: string;
  category: string;
  comments?: CommentPost;
};

export type CommentPost = {
  desc: string;
  userEmail: string;
  user: UserPost;
  postSlug: string;
  post: PostPost;
};

export type CategoryPost = {
  slug: string;
  title: string;
  posts?: PostPost;
};

export type UserPost = {
  email: string;
};
