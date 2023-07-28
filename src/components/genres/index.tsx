import { getData } from "@/apis";
import React from "react";
import { Props } from "../sidebar";

type PropsParam = {
    params: string;
};
interface TheLoaiData {
  thumbnail: string;
  title: string;
  id: string;
  is_trending: boolean;
  short_description: string;
  status: string;
  total_views: string;
  total_comments: string;
  followers: string;
  updated_at: string;
  authors: string;
  lastest_chapters:[
  {
        id: number,
        name:string,
        updated_at: string
    },
  ]
}
const PageTheLoai = async ({ params }: PropsParam) => {
  const theLoai = await getData(`/genres/${params}`)
    .then((res) => res)
    .catch((err) => console.log(err));
  const genres = await getData("/genres")
    .then((res) => res)
    .catch((err) => console.log(err));
    const foundItem = genres.find((item:Props) => item.id === params);
    let nameTitle;
    let description;
    if (foundItem) {
        nameTitle = foundItem.name;
        description = foundItem.description;
    }
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {nameTitle}
        </h2>
        <p className="tracking-tight text-gray-900 dark:text-white">
          {description}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-y-2 lg:gap-x-4 sm:grid-cols-2 lg:grid-cols-4 ">
          {theLoai.comics.map((item: TheLoaiData) => {
            return (
                <div className="group relative" key={item.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[50%]">
                  <img
                    src={item.thumbnail}
                    alt="anh"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 ">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Cập nhật: {item.updated_at}
                    </p>
                    
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      Lượt xem: {item.total_views}
                    </p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-white">
                      Chap mới nhất: {item.lastest_chapters[0].name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PageTheLoai;
