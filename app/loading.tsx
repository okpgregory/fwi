import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center z-50">
      <FaSpinner className="animate-spin" />
    </div>
  );
}
