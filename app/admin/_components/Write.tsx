"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import "react-quill/dist/quill.bubble.css";
import { Button } from "../../../components/ui/button";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Write() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="relative border border-slate-500 py-4 px-2 rounded-sm">
      <div className="mb-4 flex items-center justify-between border-b border-slate-400 p-4">
        <h2 className="text-3xl text-sky-600 font-medium">Create Blog Post</h2>
        <Button className="bg-green-600">Publish</Button>
      </div>
      <input
        className="p-8 text-[64px] border-none outline-none w-full bg-transparent placeholder:text-[#b3b3b1]"
        placeholder="Title"
      />
      <div className="flex gap-5 h-[700px] relative">
        <button
          className="min-w-9 min-h-9 max-w-9 max-h-9 rounded-full bg-transparent border border-blue-700 flex items-center justify-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <FaPlus />
        </button>
        {open && (
          <div className="flex gap-5 absolute z-[999] left-[50px]">
            <button className="min-w-9 min-h-9 max-w-9 max-h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <CiImageOn />
            </button>
            <button className="min-w-9 min-h-9 max-w-9 max-h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <MdOutlineFileUpload />
            </button>
            <button className="min-w-9 min-h-9 max-w-9 max-h-9 rounded-full bg-transparent border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <GoVideo />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={text}
          onChange={setText}
          placeholder="Enter text"
          className="w-full pt-8"
        />
      </div>
    </div>
  );
}
