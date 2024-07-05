import { slug } from "github-slugger";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "./CategoryCard";
import MenuPosts from "./MenuPosts";
import CategoryList from "./CategoryList";
import Menu from "./Menu";
import CardList from "./CardList";

export default function Featured() {
  return (
    <div className="grid md:grid-cols-4 gap-16">
      <div className="w-full inline-block col-span-3">
        <article className="flex flex-col items-start justify-end relative h-[60vh] sm:h-[65vh]">
          <div
            className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
            "
          />
          <Image
            src="/assets/blog/blog.jpg"
            // placeholder="blur"
            // blurDataURL={blog.image.blurhashDataUrl}
            alt="title"
            fill
            className="w-full h-full object-center object-cover rounded-3xl -z-10"
            sizes="100vw"
            priority
          />

          <div className="w-full rounded-b-3xl bg-black/50 px-4 md:px-8 lg:px-16 py-8 flex flex-col text-white items-start justify-center z-0 text-light">
            <CategoryCard
              title="category"
              link={`/categories/${slug("tags")}`}
            />
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
        </article>
        <CategoryList />
        <CardList page={2} cat="style" />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}
