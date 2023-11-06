'use client';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/20/solid';
import MobileMenu from './mobileMenu';

export default function WorkOrderHeader() {
  return (
    <div className="mb-5">
      <div className="mt-2 flex items-center justify-between">
        <div className="min-w-0 flex items-baseline">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            작업지시서
          </h2>
          <p className="ml-5 mt-1 truncate text-sm text-gray-500">
            WO20231023001
          </p>
        </div>

        <div className="mt-0 flex flex-shrink-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            시작
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            완료
          </button>
          {/* <button
            type="button"
            className="md:hidden inline-flex items-center rounded-md bg-white px-1 ml-1 py-2 text-sm font-semibold text-gray-900"
          >
            <EllipsisVerticalIcon className="w-5 h-5" />
          </button> */}

          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
