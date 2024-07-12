import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "./CategoryCard";
import { IPost } from "@/lib/database/models/blog/Post";
import { getFeaturedPost } from "@/lib/actions/blog/posts.actions";

export default async function Featured() {
  const post: IPost = await getFeaturedPost();

  return (
    <article className="flex flex-col items-start justify-end">
      <div className="relative w-full h-[60vh] sm:h-[65vh]">
        <Image
          src={post.img}
          alt="title"
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          priority
        />

        <div className="w-full absolute bottom-0 rounded-b-3xl bg-black/50 px-4 md:px-8 lg:px-16 py-8 flex flex-col text-white items-start justify-center z-0 text-light">
          <CategoryCard
            title={post.category.title}
            link={`/categories/${slug(post.category.slug)}`}
          />
          <Link href={`/posts/${post.slug}`} className="mt-6">
            <h1 className="font-bold capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_3px]
                hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
              >
                {post.title}
              </span>
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-4 md:text-base lg:text-lg font-light">
            {post.desc}
          </p>
        </div>
      </div>
    </article>
  );
}
