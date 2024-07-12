import React from "react";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ImageSlide from "@/components/ImageSlide";

export default function Gallery() {
  return (
    <MaxWidthWrapper className="py-20">
      <ImageSlide />
    </MaxWidthWrapper>
  );
}
