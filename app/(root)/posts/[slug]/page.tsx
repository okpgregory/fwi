import Image from "next/image";
// import Menu from "../../../../components/blog/Menu";
import { getPost } from "@/lib/actions/blog/posts.actions";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { IPost } from "@/lib/database/models/blog/Post";
import Comments from "../_components/Comments";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post: IPost = await getPost(slug);

  return (
    <MaxWidthWrapper screen>
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-12">
            {post?.title}
          </h1>
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1 text-slate-500">
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className="flex-1 w-full min-h-[350px] relative order-2">
            <Image
              src={post.img}
              objectFit="cover"
              alt={post.title}
              fill
              className="cover"
            />
          </div>
        )}
      </div>
      <div className="flex gap-12">
        <div className="flex-[5]">
          <div
            className="text-lg lg:text-xl font-light mb-5"
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          />
          <div className="">
            <Comments postSlug={slug} />
          </div>
        </div>
        {/* <Menu /> */}
      </div>
    </MaxWidthWrapper>
  );
}
