import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MenuPosts({ withImage }: { withImage: boolean }) {
  return (
    <div className="mt-9 mb-16 flex flex-col gap-8">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/assets/blog/blog.jpg"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-400 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className={`py-1 px-3 text-xs text-white w-max`}>Travel</span>
          <h3 className="text-lg font-medium text-blue-700/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="text-xl">John Doe</span>
            <span className="text-blue-700/90"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/assets/blog/blog.jpg"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-400 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-[5px]">
          <span className={`py-1 px-3 rounded-md text-sm text-white w-max`}>
            Culture
          </span>
          <h3 className="text-lg font-medium text-blue-700/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-sm">
            <span className="text-lg">John Doe</span>
            <span className="text-blue-700/90"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/assets/blog/blog.jpg"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-400 object-cover"
            />
          </div>
        )}
        <div className="flex-4 flex flex-col gap-[5px]">
          <span className={`py-1 px-3 rounded-md text-white w-max`}>Food</span>
          <h3 className="text-lg font-medium text-blue-700/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-sm">
            <span className="text-lg">John Doe</span>
            <span className="text-blue-700/90"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1 aspect-square relative">
            <Image
              src="/assets/blog/blog.jpg"
              alt=""
              fill
              className="rounded-full border-[3px] border-gray-400 object-cover"
            />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-[5px]">
          <span className={`py-1 px-3 rounded-md text-white w-max`}>
            Fashion
          </span>
          <h3 className="text-lg font-medium text-blue-700/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="text-sm">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
