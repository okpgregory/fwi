import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Featured from "./_components/Featured";
import CategoryList from "./_components/CategoryList";
import CardList from "./_components/CardList";
import Menu from "./_components/Menu";

type Props = {
  searchParams: {
    page: string;
  };
};

export default function BlogPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <MaxWidthWrapper className="py-20">
      <div className="flex flex-col md:flex-row gap-16 w-full">
        <div className="w-full md:w-[70%] flex flex-col gap-16 divide-y-2">
          <Featured />
          <CategoryList />
          <CardList page={page} cat="style" />
        </div>
        <div className="md:w-[30%]">
          <Menu />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
