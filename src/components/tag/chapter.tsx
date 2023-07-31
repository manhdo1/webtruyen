import * as React from "react";
import { ITagProps } from "./the-loai";

export default function TagChapter(props: ITagProps) {
  return (
    <>
      <span className="resetCss my-1 flex items-center mt-1 bg-purple-100 text-purple-800 hover:text-purple-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 dark:hover:text-purple-500">
        {props.name}
      </span>
    </>
  );
}
