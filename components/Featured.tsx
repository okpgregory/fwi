import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "./CategoryCard";

export default function Featured() {
  return (
    <article className="flex flex-col items-start justify-end">
      <div className="relative w-full h-[60vh] sm:h-[65vh]">
        <Image
          src="/assets/blog/blog.jpg"
          // placeholder="blur"
          // blurDataURL={blog.image.blurhashDataUrl}
          alt="title"
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
          priority
        />

        <div className="w-full absolute bottom-0 rounded-b-3xl bg-black/50 px-4 md:px-8 lg:px-16 py-8 flex flex-col text-white items-start justify-center z-0 text-light">
          <CategoryCard title="category" link={`/categories/${slug("tags")}`} />
          <Link href="/url" className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
              >
                title
              </span>
            </h1>
          </Link>
          <p className="hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
            nisi fuga? Velit harum veniam ex delectus quo cumque placeat vel.
          </p>
        </div>
      </div>
    </article>
  );
}
