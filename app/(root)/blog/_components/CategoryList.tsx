import { getCategories } from "@/lib/actions/blog/category.actions";
import { ICategory } from "@/lib/database/models/blog/Category";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import { cn } from "@/utils";
import { badgeVariants } from "@/components/ui/badge";

export default async function CategoryList() {
  const data = await getCategories();

  return (
    <div className="mt-16">
      <h3 className="mt-12 text-5xl text-slate-700 mb-4">Popular Categories</h3>
      <div className="flex overflow-hidden gap-10 py-2 px-4">
        {data?.splice(0, 10).map((item: ICategory) => (
          <Link
            key={item._id}
            className={cn(
              "whitespace-nowrap",
              badgeVariants({
                variant: "outline",
                className: "text-blue-700 border-blue-700",
              })
            )}
            href={`/categories/${item.slug}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
