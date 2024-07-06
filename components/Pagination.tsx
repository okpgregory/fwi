"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Pagination({
  page,
  hasPrev,
  hasNext,
}: {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-auto">
      <Button
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
        className="bg-blue-600"
      >
        Previous
      </Button>
      <Button
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        className="bg-blue-600"
      >
        Next
      </Button>
    </div>
  );
}
