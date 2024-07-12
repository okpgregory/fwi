"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
// import { useSession } from "next-auth/react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
  //   const { status } = useSession();

  //   const { data, mutate, isLoading } = useSWR(
  //     `http://localhost:3000/api/comments?postSlug=${postSlug}`,
  //     fetcher
  //   );

  //   const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    // await fetch("/api/comments", {
    //   method: "POST",
    //   body: JSON.stringify({ desc, postSlug }),
    // });
    // mutate();
  };

  const status = "authenticated";
  const isLoading = false;
  const data = [
    {
      _id: 1,
      user: { image: "", name: "name" },
      createdAt: "99-99-99",
      desc: "oeproeperop",
    },
    {
      _id: 2,
      user: { image: "", name: "name" },
      createdAt: "99-99-99",
      desc: "oeproeperop",
    },
    {
      _id: 3,
      user: { image: "", name: "name" },
      createdAt: "99-99-99",
      desc: "oeproeperop",
    },
  ];

  return (
    <div className="mt-12">
      <h1 className="text-slate-600 mb-8">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-8">
          <Textarea
            placeholder="write a comment..."
            className="p-5 w-full bg-gray-50"
            // onChange={(e) => setDesc(e.target.value)}
          />
          <Button className="bg-teal-600" onClick={handleSubmit}>
            Send
          </Button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-12">
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className="mb-12" key={item._id}>
                <div className="flex items-center gap-5 mb-5">
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-1 text-slate-600">
                    <span className="font-medium">{item.user.name}</span>
                    <span className="text-sm">{item.createdAt}</span>
                  </div>
                </div>
                <p className="text-lg font-light">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
