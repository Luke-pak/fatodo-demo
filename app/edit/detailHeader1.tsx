'use client';
import useSidebar from '@/store/Sidebar';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function DetailHeader1() {
  const [setOpen] = useSidebar((state: any) => [state.setOpen]);

  return (
    <div className="mb-5">
      <div>
        <nav className="md:hidden flex justify-end" aria-label="Back">
          <button
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            onClick={setOpen}
          >
            <ChevronLeftIcon
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            History
          </button>
        </nav>

        <nav className="hidden md:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  영업관리
                </a>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="#"
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  수주
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="min-w-0 flex items-baseline">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
            수주정보
          </h2>
          <p className="ml-5 mt-1 truncate text-sm text-gray-500">
            CO20231023001
          </p>
        </div>

        <div className="mt-0 flex flex-shrink-0 md:ml-4 ">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-600 dark:ring-gray-600 dark:text-white dark:hover:bg-gray-500 transition-colors duration-300"
          >
            수정
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300"
          >
            승인
          </button>

          <button
            className="hidden md:flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 transition-colors duration-300 ml-3"
            onClick={setOpen}
          >
            <ChevronLeftIcon
              className="-ml-1 h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            />
            History
          </button>
        </div>
      </div>
    </div>
  );
}
