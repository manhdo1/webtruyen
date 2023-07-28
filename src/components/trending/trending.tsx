
import { getData } from "@/apis";
import React, { useEffect, useState } from "react";
import ComicTrendings from "./comic-trending";

const Trending =  () => {
  
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Đề cử
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ComicTrendings/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
