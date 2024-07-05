import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({
  item,
}: {
  item: {
    _id: number;
    img: string;
    createdAt: string;
    catSlug: string;
    slug: string;
    item: string;
    title: string;
    desc: string;
  };
}) => {
  return (
    <div className="mt-12 flex items-center gap-12">
      {item.img && (
        <div className="flex-1 h-[350px] relative xl:hidden">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-8">
        <div className="">
          <span className="text-gray-600">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-pink-600 font-medium">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div
          className="text-lg font-light text-blue-700/80"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link
          href={`/posts/${item.slug}`}
          className="border-b border-pink-700 w-max py-1"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
