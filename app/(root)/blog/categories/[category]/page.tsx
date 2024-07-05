import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { SearchParamProps } from "@/types";
import React from "react";

export default function page({ params }: SearchParamProps) {
  const page = parseInt(params.page) || 1;
  const { cat } = params;

  return (
    <MaxWidthWrapper>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </MaxWidthWrapper>
  );
}
