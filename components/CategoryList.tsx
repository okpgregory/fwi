import { getCategories } from "@/lib/actions/blog/category.actions";
import { ICategory } from "@/lib/database/models/blog/Category";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard";

export default async function CategoryList() {
  const data = await getCategories();

  return (
    <div className="mt-16">
      <h3 className="mt-12 text-5xl text-slate-700 mb-4">Popular Categories</h3>
      <div className="flex overflow-hidden gap-10 py-2 px-4">
        {data?.splice(0, 10).map((item: ICategory) => (
          <CategoryCard
            key={item._id}
            title={item.title}
            link={`/categories/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
