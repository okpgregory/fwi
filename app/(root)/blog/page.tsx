import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

export default function BlogPage() {
  return (
    <MaxWidthWrapper>
      <Featured />
      <CategoryList />
      <div className="flex gap-12">
        <CardList page={2} cat="style" />
        <Menu />
      </div>
    </MaxWidthWrapper>
  );
}
