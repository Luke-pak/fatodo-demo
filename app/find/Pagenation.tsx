'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

const selected =
  'relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
const PAGE_COUNT = 7;
const PAGE_HALF = Math.floor(PAGE_COUNT / 2);

type PageProps = {
  currentPage: number;
  total: number;
  limit: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  currentPage,
  total,
  limit,
  setPage,
  setLimit,
}: PageProps) {
  const stIndex = currentPage !== 1 ? (currentPage - 1) * limit : 1;
  const edIndex = currentPage * limit;

  const lastPage = Math.ceil(total / limit);

  let pages = [];
  let stPage = currentPage > PAGE_HALF ? currentPage - PAGE_HALF : 1;
  let edPage =
    stPage + (PAGE_COUNT - 1) > lastPage ? lastPage : stPage + (PAGE_COUNT - 1);

  if (edPage - stPage < PAGE_COUNT - 1 && stPage - (edPage - stPage) > 1) {
    stPage = edPage - (PAGE_COUNT - 1);
  }

  for (let i = stPage; i <= edPage; i++) {
    if (pages?.length === PAGE_COUNT) break;
    if (lastPage < i || i < 1) continue;
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 mt-2 bg-white border-t border-gray-200 md:px-6">
      <div className="flex justify-between flex-1 md:hidden">
        <button
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          onClick={() => {
            if (currentPage != 1) setPage(currentPage - 1);
          }}
        >
          Previous
        </button>
        <button
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          onClick={() => {
            setPage(currentPage + 1);
          }}
        >
          Next
        </button>
      </div>

      <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <div>
          <select
            name="limit"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:max-w-xs md:text-sm md:leading-6"
            onChange={e => {
              e.preventDefault();
              const limit = Number(e.target.value);
              setLimit(limit);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{stIndex}</span> to{' '}
            <span className="font-medium">
              {edIndex > total ? total : edIndex}
            </span>{' '}
            of <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="inline-flex -space-x-px rounded-md shadow-sm isolate"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => {
                if (currentPage != 1) setPage(currentPage - 1);
              }}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>

            {pages.map((item, index) => {
              return (
                <button
                  key={index}
                  aria-current="page"
                  className={
                    item === currentPage
                      ? selected
                      : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  }
                  onClick={() => {
                    setPage(item);
                  }}
                >
                  {item}
                </button>
              );
            })}

            <button
              className="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => {
                if (currentPage < lastPage) setPage(currentPage + 1);
              }}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
