import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

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
      {/* <div className="flex gap-12"></div> */}
    </MaxWidthWrapper>
  );
}
