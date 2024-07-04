import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

export default function CardList({ page, cat }: { page: number; cat: string }) {
  const { posts, count } = {
    posts: [
      {
        _id: 1,
        img: "",
        createdAt: "",
        catSlug: "",
        slug: "",
        item: "",
        title: "",
        desc: "",
      },
    ],
    count: 5,
  };

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-[5]">
      <h3 className="mt-12">Recent Posts</h3>
      <div className="">
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}
