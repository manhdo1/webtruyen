'use client'
import { getData } from "@/apis";
import Image from "next/image";
import * as React from "react";
import TagTheLoai from "../tag/the-loai";
import { StartIcon } from "../icons/start-icon";

export interface IComicDetailProps {
  title: string;
  thumbnail: string;
  description: string;
  authors: string;
  status: string;
  genres: [
    {
      id: string;
      name: string;
    }
  ];
  total_views: number;
  average: number;
  rating_count: number;
  followers: number;
  chapters: [
    {
      id: number;
      name: string;
    }
  ];
  id: string;
  is_adult: boolean;
  other_names: [string];
}

export default function ComicDetail({ params }: { params: { slug: string } }) {
  const [ComicDetail, setComicDetail] = React.useState<IComicDetailProps>();
  React.useEffect(() => {
    getData(`/comics/${params.slug}`)
      .then((res) => setComicDetail(res))
      .catch((err) => console.log(err));
  }, [params.slug]);

  return (
    <>
      {ComicDetail && (
        <>
          <div className="flex flex-col items-center bg-white  rounded-lg  md:flex-row   dark:bg-gray-800 ">
            <Image
              loading="lazy"
              className="object-cover w-full h-96 p-6 md:p-0 md:h-full rounded-lg md:w-48"
              src={ComicDetail.thumbnail}
              alt={"item.id"}
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
              <h5 className="mb-2 text-gadient text-base md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {ComicDetail.title}
              </h5>
              <div className="flex items-center flex-wrap">
                <span className="mr-1 text-sm">Thể loại:</span>
                {ComicDetail.genres.map((item) => {
                  return item.name ? (
                    <a key={item.id} href="#">
                      <TagTheLoai name={item.name} />
                    </a>
                  ) : null;
                })}
              </div>
              <span className="text-sm">
                Lượt xem:{" "}
                {new Intl.NumberFormat("de-DE").format(ComicDetail.total_views)}
              </span>
              <p className="mt-1 text-sm">
                Theo dõi:{" "}
                {new Intl.NumberFormat("de-DE").format(ComicDetail.followers)}
              </p>
              <p className="mt-1 text-sm">Tác giả: {ComicDetail.authors}</p>
              <p className="mt-1 text-sm">Trạng thái: {ComicDetail.status}</p>
              {/* <p className="mt-1 text-sm">Tên khác: {ComicDetail.status}</p> */}
              <div className="flex items-center my-1">
                <StartIcon />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {ComicDetail.average}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Số lượt bình chọn:{" "}
                  {new Intl.NumberFormat("de-DE").format(
                    ComicDetail.rating_count
                  )}
                </span>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="w-fit truncate text-gray-900 bg-white border border-gray-300  hover:bg-gray-100   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Đọc từ đầu
                </button>
                <button
                  type="button"
                  className="w-fit truncate text-white bg-green-700 hover:bg-green-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Đọc chap mới nhất
                </button>
              </div>

              <p className="hidden md:block mt-1 font-normal text-xs text-gray-700 dark:text-gray-400">
                {ComicDetail.description == ""
                  ? "Updating..."
                  : ComicDetail.description}
              </p>
            </div>
          </div>
          <div className="my-2 border-t-2">
            <label className="my-2  text-gadient text-base md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Danh sách chương
            </label>
            <select
              size={5}
              id="countries"
              className="bg-gray-50 border  focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
            >
              {ComicDetail.chapters.map((item) => {
                return (
                  <>
                    <option className="py-2 rounded-sm text-sm border-b-2 cursor-pointer" value={item.id}>
                      {item.name}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
        </>
      )}
    </>
  );
}
