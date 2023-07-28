import { getData } from "@/apis";
import Image from "next/image";
import React from "react";

interface PropsTrending {
  id: string;
  title: string;
  thumbnail: string;
  updated_at: string;
  lastest_chapter: {
    id: number;
    name: string;
  };
}

const Trending = async () => {
  const trending = await getData("/recommend-comics")
    .then((res) => res)
    .catch((err) => err);
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Đề cử
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {trending.map((item: PropsTrending) => {
              return (
                <div className="group relative" key={item.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[50%]">
                    <img
                      src={item.thumbnail}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 "
                          ></span>
                          {item.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.updated_at}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.lastest_chapter.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
