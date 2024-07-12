import { blogColumns } from "@/app/admin/_components/table/blogColumns";
import { DataTable } from "@/app/admin/_components/table/DataTable";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { getAllPosts } from "@/lib/actions/blog/posts.actions";

export default async function AdminBlogPage() {
  const posts = await getAllPosts();

  return (
    <MaxWidthWrapper>
      <DataTable columns={blogColumns} data={posts} />
    </MaxWidthWrapper>
  );
}
