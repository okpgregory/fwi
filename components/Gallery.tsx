import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import ImageSlide from "./ImageSlide";

export default function Gallery() {
  return (
    <MaxWidthWrapper className="py-20">
      <ImageSlide />
    </MaxWidthWrapper>
  );
}
