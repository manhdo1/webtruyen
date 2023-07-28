'use client'
import { getData } from "@/apis";
import Image from "next/image";
import * as React from "react";

export interface IComicChaptersProps {
  param: {
    slug: string[];
  };
}
interface ChaptersImg {
  page: number;
  src: string;
  backup_url_1: string;
  backup_url_2: string;
}
export default  function ComicChapters({ param }: IComicChaptersProps) {
  const [chaptersImg, setChaptersImg] = React.useState<any>()
  const comicId = param.slug[0];
  const chapterId = param.slug[2];
  React.useEffect(() => {
    getData(`/comics/${comicId}/chapters/${chapterId}`)
    .then((res) => setChaptersImg(res))
    .catch((err) => console.log(err));
  },[chapterId, comicId])
  
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="justify-self-center">
        {chaptersImg?.images.map((item: ChaptersImg) => {
          return (
            <>
              <Image
                className="max-w-4xl h-auto"
                src={item.src}
                alt="img chapter"
                width={900}
                height={700}
                loading="lazy"
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
