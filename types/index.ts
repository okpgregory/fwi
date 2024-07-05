export type SearchParamProps = {
  params: { id: string; page: string; cat: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type CategoryPost = {
  slug: string;
  title: string;
};
