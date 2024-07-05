import { getCategories } from "@/lib/actions/blog/category.actions";
import { ICategory } from "@/lib/database/models/blog/Category";
import React from "react";

export default async function Categories() {
  const categories = await getCategories();

  if (!categories) {
    return <h3>No categories found</h3>;
  }

  return (
    <ul>
      {categories &&
        categories?.map((category: ICategory) => (
          <li key={category._id}>
            <div>
              {category.slug} - {category.title}
            </div>
          </li>
        ))}
    </ul>
  );
}
