import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryList() {
  const data = [{ _id: 1, img: "", title: "" }];

  return (
    <div className="">
      <h3 className="mt-12">Popular Categories</h3>
      <div className="flex flex-wrap justify-between gap-5">
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-between rounded-lg`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
