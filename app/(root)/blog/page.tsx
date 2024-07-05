import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

export default function BlogPage() {
  return (
    <MaxWidthWrapper className="py-20">
      <Featured />
      <div className="flex gap-12"></div>
    </MaxWidthWrapper>
  );
}
