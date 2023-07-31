import { Props } from "@/app/genres/[slug]/page";
import Main from "@/components/main";
import dynamic from "next/dynamic";
const ComicDetail = dynamic(() => import('@/components/comics-detail'))

import * as React from "react";
export default function ComicsDetail({ params }: Props) {
  return (
    <>
      <Main>
        <ComicDetail params={params} />
      </Main>
    </>
  );
}
