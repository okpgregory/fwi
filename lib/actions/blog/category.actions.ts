import { connectToDatabase } from "@/lib/database";
import { Category } from "@/lib/database/models/blog/Category";
import { CategoryPost } from "@/types";
import { handleError } from "@/utils";

export const createCategory = async (category: CategoryPost) => {
  try {
    await connectToDatabase();
    const newCategory = await Category.create(category);
    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getCategories = async () => {
  try {
    await connectToDatabase();
    const categories = await Category.find();
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
