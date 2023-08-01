"use client";
import { getData } from "@/apis";
import Image from "next/image";
import * as React from "react";
import { PreviousArrow } from "../icons/prev-icon";
import { NextIcon } from "../icons/next-icon";
import { useRouter } from "next/navigation";
import errorImg from "../../../public/Images/errorImg.png"
export interface IComicChaptersProps {
  param: {
    slug: string[];
  };
}
interface IChaptersImg {
  page: number;
  src: string;
  backup_url_1: string;
  backup_url_2: string;
}
interface IChapter {
  images: [];
  chapters: [
    {
      id: number;
      name: string;
    }
  ];
  chapter_name: string;
  comic_name: string;
}
export default function ComicChapters({ param }: IComicChaptersProps) {
  const [chaptersImg, setChaptersImg] = React.useState<IChapter>();
  const router = useRouter();
  const comicId = param.slug[0];
  const chapterId = param.slug[2];
  const checkFisrtChapter =
    chaptersImg?.chapters[chaptersImg.chapters.length - 1].name ==
    chaptersImg?.chapter_name;
  const checkEndChapter =
    chaptersImg?.chapters[0].name == chaptersImg?.chapter_name;
  React.useEffect(() => {
    getData(`/comics/${comicId}/chapters/${chapterId}`)
      .then((res) => setChaptersImg(res))
      .catch((err) => console.log(err));
  }, [chapterId, comicId]);
  const changeChapter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentChap = e.target.value;
    router.push(`/comic-chapter/${comicId}/chapters/${currentChap}`);
  };
  const preChapter = () => {
    const positionCurrent = chaptersImg?.chapters.findIndex(
      (item) => item.id.toString() === chapterId
    );
    if (positionCurrent !== -1 && positionCurrent) {
      const previousPosition = positionCurrent + 1;
      router.push(
        `/comic-chapter/${comicId}/chapters/${chaptersImg?.chapters[previousPosition].id}`
      );
    }
  };
  const nextChapter = () => {
    const positionCurrent = chaptersImg?.chapters.findIndex(
      (item) => item.id.toString() === chapterId
    );
    if (positionCurrent !== -1 && positionCurrent) {
      const previousPosition = positionCurrent - 1;
      router.push(
        `/comic-chapter/${comicId}/chapters/${chaptersImg?.chapters[previousPosition].id}`
      );
    }
  };
  return (
    <div className="grid grid-cols-1 gap-4">
      <span className="text-center text-xl font-bold p-5 text-gadient">
        {chaptersImg?.comic_name}
      </span>
      <span className="text-center border-b-2 shadow text-gadient">
        {chaptersImg?.chapter_name}
      </span>
      <div className="justify-self-center border-b-2 pb-4">
        {chaptersImg?.images.map((item: IChaptersImg) => {
          return (
            <Image
              key={item.page}
              className="max-w-4xl h-auto"
              src={item.src || item.backup_url_1 || item.backup_url_2 || errorImg}
              alt={"Image " + item.page}
              width={900}
              height={700}
              loading="lazy"
            />
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <div className="flex w-72 md:w-96 justify-center h-10">
          <button
            onClick={preChapter}
            disabled={checkFisrtChapter ? true : false}
            type="button"
            className={`text-gray-900 flex items-center justify-center p-2  text-xs   border border-gray-300 focus:outline-none ${
              checkFisrtChapter ? "bg-gray-100" : "hover:bg-gray-100"
            } focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
          >
            <PreviousArrow />
          </button>

          <select
            value={chapterId}
            onChange={changeChapter}
            id="countries"
            className="bg-gray-50 border mx-2 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          >
            {chaptersImg?.chapters.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button
            onClick={nextChapter}
            type="button"
            className={`text-gray-900 flex items-center justify-center p-2  text-xs   border border-gray-300 focus:outline-none ${
              checkEndChapter ? "bg-gray-100" : "hover:bg-gray-100"
            } focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
