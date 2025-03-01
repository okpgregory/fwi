import { getCategories } from "@/lib/actions/blog/category.actions";
import { ICategory } from "@/lib/database/models/blog/Category";
import Link from "next/link";
const MenuCategories = async () => {
  const categories = await getCategories();

  return (
    <div className="py-1 flex flex-wrap gap-x-4 font-medium mb-16 mt-4">
      {categories
        .reverse()
        .splice(3, 5)
        .map((category: ICategory) => (
          <Link
            key={category._id}
            href={`/categories/${category.slug}`}
            className="text-blue-600"
          >
            {category.title.split(" ")[0]}
          </Link>
        ))}
    </div>
  );
};

export default MenuCategories;
