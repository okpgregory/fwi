"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { FaPlus } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { CiImageOn } from "react-icons/ci";
import { GoVideo } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { Button } from "./ui/button";

export default function Write() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        className="p-8 text-[64px] border-none outline-none bg-transparent placeholder:text-[#b3b3b1]"
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
      <Button className="absolute top-[30px] right-[20px]">Publish</Button>
    </div>
  );
}
