"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { setFeaturedPost } from "@/lib/actions/blog/posts.actions";
import { IPost } from "@/lib/database/models/blog/Post";

export const blogColumns: ColumnDef<IPost>[] = [
  {
    accessorKey: "featured",
    header: "Featured",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <div className="text-14-medium ">
          <Checkbox
            checked={post.featured}
            onCheckedChange={async () => await setFeaturedPost(post._id)}
          />
        </div>
      );
    },
  },
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}.</p>;
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src={post.img}
              alt={post.title}
              fill
              className="size-8 rounded-full"
              priority
            />
          </div>
          <p className="text-[14px] leading-[18px] font-medium  whitespace-nowrap">
            {post.title.substring(0, 15)}...
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <div className="min-w-[115px] text-sky-50 text-xs text-center bg-sky-500 rounded-full px-2 py-1 leading-[18px] font-medium">
          {post.category.title}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      const post = row.original;
      return (
        <p className="text-[14px] leading-[18px] font-medium min-w-[100px]">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      );
    },
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => {
      const post = row.original;

      return (
        <span className="flex items-center gap-3 font-bold">{post.views}</span>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const post = row.original;

      return (
        <div className="flex gap-1">
          <Button>Edit</Button>
          <Button className="bg-red-500 hover:bg-red-500/50">Delete</Button>
        </div>
      );
    },
  },
];
