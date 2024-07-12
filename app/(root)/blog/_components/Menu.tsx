import MenuCategories from "./MenuCategories";
import MenuPosts from "./MenuPosts";

export default function Menu() {
  return (
    <div className="flex-[2] mt-16 flex flex-col divide-y-2">
      <div className="pt-4">
        <h4 className="text-gray-700 text-base font-normal">{"What's hot"}</h4>
        <h3 className="text-3xl">Most Popular</h3>
        <MenuPosts withImage={false} />
      </div>
      <div className="pt-4">
        <h3 className="text-gray-700 text-base font-normal">
          Discover by topic
        </h3>
        <h3 className="text-3xl">Categories</h3>
        <MenuCategories />
      </div>
      <div className="pt-4">
        <h3 className="text-gray-700 text-base font-normal">
          Chosen by the editor
        </h3>
        <h3 className="text-3xl">Editors Pick</h3>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
}
