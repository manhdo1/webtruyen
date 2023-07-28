import { getData } from '@/apis';
import Link from 'next/link';
import React from 'react'
export interface Props {
    id?: string;
    name?: string;
    description?: string;
  }

const SideBar = async () => {
    const genres = await getData("/genres")
    .then((res) => res)
    .catch((err) => console.log(err));
    
  return (
    <>
        <aside
        id="default-sidebar"
        className="mt-20 w-52 max-h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {genres.map((item: Props) => {
              return (
                <li key={item.id}>
                  <Link
                    href={`/genres/${item.id}`}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar