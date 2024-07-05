import Link from "next/link";
import Image from "next/image";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

export default function Menu() {
  return (
    <div className="flex-[2] mt-16">
      <h4 className="text-gray-700 text-base font-normal">{"What's hot"}</h4>
      <h3 className="text-3xl">Most Popular</h3>
      <MenuPosts withImage={false} />
      <h3 className="text-gray-700 text-base font-normal">Discover by topic</h3>
      <h3 className="text-3xl">Categories</h3>
      <MenuCategories />
      <h3 className="text-gray-700 text-base font-normal">
        Chosen by the editor
      </h3>
      <h3 className="text-3xl">Editors Pick</h3>
      <MenuPosts withImage={true} />
    </div>
  );
}
