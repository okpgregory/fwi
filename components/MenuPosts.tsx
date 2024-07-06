import { getPosts } from "@/lib/actions/blog/posts.actions";
import { IPost } from "@/lib/database/models/blog/Post";
import Image from "next/image";
import Link from "next/link";

export default async function MenuPosts({ withImage }: { withImage: boolean }) {
  const { posts } = await getPosts({ page: 1, POST_PER_PAGE: 5 });

  return (
    <div className="mt-9 mb-16 flex flex-col gap-8">
      {posts.map((post: IPost) => (
        <Link
          key={post._id}
          href={`/posts/${post.slug}`}
          className="flex items-center gap-5"
        >
          {withImage && (
            <div className="flex-1 aspect-square relative">
              <Image
                src={post.img}
                alt=""
                fill
                className="rounded-full border-[3px] border-gray-400 object-cover"
              />
            </div>
          )}
          <div className="flex-[4] flex flex-col gap-[5px]">
            <span className={`py-1 px-3 text-xs text-white bg-blue-300 w-max`}>
              {post.category.title}
            </span>
            <h3 className="text-lg font-medium text-blue-700/90">
              {post.title}
            </h3>
            <div className="text-xs">
              <span className="text-blue-700/90">
                {" "}
                - {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
