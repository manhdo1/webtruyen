"use client";
import { getData } from "@/apis";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface PropsTrending {
  id: string;
  title: string;
  thumbnail: string;
  updated_at: string;
  lastest_chapter: {
    id: number;
    name: string;
  };
}
export default function ComicTrendings() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    getData("/recommend-comics")
      .then((res) => setTrending(res))
      .catch((err) => err);
  }, []);
  return (
    <>
      {trending?.map((item: PropsTrending) => {
        return (
          <div className="group relative" key={item.id}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[70%]">
              <Image
                loading="lazy"
                src={item.thumbnail}
                alt={item.id}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                width={500}
                height={500}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link
                    href={`/comic-chapter/${item.id}/chapters/${item.lastest_chapter.id}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.updated_at}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.lastest_chapter.name}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
