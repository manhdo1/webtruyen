import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
interface IPaginationNewComics{
  pagination:{
    current_page:number,
    total_pages:number
  }
}
export default function Pagination({ pagination }: IPaginationNewComics) {
  return (
    <div className="flex items-center justify-center border-t border-gray-200 bg-white dark:bg-gray-900 px-4 py-3 sm:px-6">
  <div className="sm:flex sm:flex-1 sm:items-center sm:justify-end">
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a
          href="#"
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </a>

        <a
          href="#"
          aria-current="page"
          className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          1
        </a>
        {pagination.current_page >= 3 && (
          <>
            <span className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              {pagination.current_page - 1}
            </a>
          </>
        )}

        {pagination.current_page !== 1 && pagination.current_page !== pagination.total_pages && (
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            {pagination.current_page}
          </a>
        )}

        {pagination.current_page <= pagination.total_pages - 3 && (
          <>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              {pagination.current_page + 1}
            </a>
            <span className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
          </>
        )}

        {pagination.current_page == pagination.total_pages - 2 && (
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            {pagination.total_pages - 1}
          </a>
        )}
   
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-1 md:px-4 md:py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            {pagination.total_pages}
          </a>
      
        <a
          href="#"
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  </div>
</div>
  );
}
