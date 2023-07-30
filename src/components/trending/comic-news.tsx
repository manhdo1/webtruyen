import { getData } from "@/apis";
import * as React from "react";
import { PropsTrending } from "./comic-trending";
import Image from "next/image";
import Pagination from "../pagination";

export interface INewComicsProps extends PropsTrending {
  short_description: string;
  total_views: string;
  genres: [
    {
      id: string;
      name: string;
    }
  ];
  lastest_chapters: [
    {
      id: number;
      name: string;
      updated_at: string;
    }
  ];
}

export default async function ComicNews() {
  const newComics = await getData("/new-comics")
    .then((res) => res)
    .catch((err) => err);

  const newComicsArr = newComics.comics;

  return (
    <>
      {newComicsArr.map((item: INewComicsProps) => {
        return (
          <a
            key={item.id}
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              loading="lazy"
              className="object-cover w-full h-[200px] md:h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg"
              src={item.thumbnail}
              alt={item.id}
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
              <h5 className="mb-2 text-base md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <div className="flex items-center flex-wrap">
                <span className="mr-1 text-sm">Thể loại:</span>
                {item.genres.map((item) => {
                  return (
                    <a key={item.id} href="#">
                      <span className="resetCss my-1 flex items-center w-fit truncate bg-red-100 text-red-800 hover:text-red-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 dark:hover:text-red-500">
                        {item.name}
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="flex items-center flex-wrap">
                <span className="mr-1 text-sm">Chap mới nhất: </span>
                {item.lastest_chapters.map((item) => {
                  return (
                    <a key={item.id} href="#">
                      <span className="resetCss my-1 flex items-center mt-1 bg-purple-100 text-purple-800 hover:text-purple-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 dark:hover:text-purple-500">
                        {item.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              <span className="text-sm">Lượt xem: {item.total_views}</span>
              <p className="mt-1 text-sm">{item.updated_at}</p>
              <p className="hidden md:block mt-1 font-normal text-xs text-gray-700 dark:text-gray-400">
                {item.short_description == ""
                  ? "Updating..."
                  : item.short_description}
              </p>
            </div>
          </a>
        );
      })}
      <Pagination/>
    </>
  );
}
