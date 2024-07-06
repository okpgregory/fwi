import { IPost } from "@/lib/database/models/blog/Post";
import Image from "next/image";
import Link from "next/link";

const Card = ({ post }: { post: IPost }) => {
  return (
    <div className="mt-12 flex items-center gap-12">
      {post.img && (
        <div className="flex-1 h-[350px] relative">
          <Image src={post.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-8">
        <div className="">
          <span className="text-gray-600">
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-pink-600 font-medium">{post.categorySlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{post.desc.substring(0, 60)}</p> */}
        <div
          className="text-lg font-light text-blue-700/80"
          dangerouslySetInnerHTML={{ __html: post?.desc.substring(0, 60) }}
        />
        <Link
          href={`/posts/${post.slug}`}
          className="border-b border-pink-700 w-max py-1"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
