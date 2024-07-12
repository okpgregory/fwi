import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

type Props = {
  checked: boolean;
};

export default function FeaturedCheckbox() {
  return (
    <div className="text-14-medium ">
      <Checkbox
        checked={post.featured}
        onCheckedChange={() => setFeaturedPost(post._id)}
      />
    </div>
  );
}
