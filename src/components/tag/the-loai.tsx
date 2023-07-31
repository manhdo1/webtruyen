import * as React from 'react';

export interface ITagProps {
    name:string
}

export default function TagTheLoai (props: ITagProps) {
  return (
    <>
      <span className="resetCss my-1 flex items-center w-fit truncate bg-red-100 text-red-800 hover:text-red-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 dark:hover:text-red-500">
        {props.name}
      </span>
    </>
  );
}
