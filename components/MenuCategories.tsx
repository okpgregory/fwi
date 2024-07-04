import Link from "next/link";

const MenuCategories = () => {
  return (
    <div className="mt-8 mb-16 flex flex-wrap gap-5">
      <Link href="/blog?cat=style" className={`py-3 px-6 rounded-md text-sm`}>
        Style
      </Link>
      <Link href="/blog" className={`mt-8 mb-16 flex flex-wrap gap-5`}>
        Fashion
      </Link>
      <Link href="/blog" className={`mt-8 mb-16 flex flex-wrap gap-5`}>
        Food
      </Link>
      <Link href="/blog" className={`mt-8 mb-16 flex flex-wrap gap-5`}>
        Travel
      </Link>
      <Link href="/blog" className={`mt-8 mb-16 flex flex-wrap gap-5`}>
        Culture
      </Link>
      <Link href="/blog" className={`mt-8 mb-16 flex flex-wrap gap-5`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
