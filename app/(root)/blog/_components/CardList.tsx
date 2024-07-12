import Card from "./Card";
import Pagination from "../../../../components/Pagination";
import { getPosts } from "@/lib/actions/blog/posts.actions";
import { IPost } from "@/lib/database/models/blog/Post";

export default async function CardList({
  page,
  cat,
}: {
  page: number;
  cat?: string;
}) {
  const POST_PER_PAGE = 3;
  const { posts, postsCount: count } = await getPosts({
    page,
    POST_PER_PAGE,
  });

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex flex-col justify-between h-full gap-8">
      <h3 className="mt-12 text-5xl text-slate-700 mb-4">Recent Posts</h3>
      <div className="">
        {posts?.map((post: IPost) => (
          <Card post={post} key={post._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}
