'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { products } from './data';
import { Pagination, PaginationTop } from './Pagenation';
import useSidebar from '@/store/Sidebar';
import { Button } from '@/components/Button';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Search3 } from './Search';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const thClass =
  'z-10 border-b border-gray-300 bg-white bg-opacity-75 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter';

export default function Table() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [setOpen] = useSidebar((state: any) => [state.setOpen]);
  const [checked, setChecked] = useState(false);

  const thead = useRef<HTMLTableSectionElement>(null);
  const scrollTop = useRef<number>(0);
  const [scrollHeader, setScrollHeader] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY >= scrollTop.current) setScrollHeader(true);
    else if (scrollY < scrollTop.current) setScrollHeader(false);
  }, []);

  useEffect(() => {
    const value = thead.current?.offsetTop || 0;
    scrollTop.current = value;

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [orderBy, setOrderBy] = useState({ field: '', sort: 'none' });

  const OrderBy = (field: string) => {
    if (orderBy.field !== field) {
      setOrderBy({ field: field, sort: 'desc' });
      return;
    }

    if (orderBy.sort === 'none') setOrderBy({ field: field, sort: 'desc' });
    else if (orderBy.sort === 'desc') setOrderBy({ field: field, sort: 'asc' });
    else if (orderBy.sort === 'asc') setOrderBy({ field: '', sort: 'none' });
  };
  return (
    <div className="col-span-full p-0">
      <table className="min-w-full border-separate border-spacing-0">
        <thead className="sticky top-16 z-10 bg-gray-200" ref={thead}>
          {scrollHeader && (
            <tr className="border-white bg-white">
              <th className="h-12" colSpan={5} scope="col">
                <div className="col-span-12 sm:col-span-8 py-1 min-h-[3rem]">
                  <Search3 />
                </div>
              </th>
            </tr>
          )}

          {/* <tr className="border-white bg-white">
            <th colSpan={50}>
              <PaginationTop
                currentPage={1}
                total={50}
                limit={10}
                setPage={setPage}
                setLimit={setLimit}
              />
            </th>
          </tr> */}

          <tr>
            <th
              scope="col"
              className={clsx(
                thClass,
                'py-3.5 pl-4 pr-3 sm:pl-6 lg:pl-8 border-l border-gray-200 border-t rounded-tl-lg'
              )}
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => OrderBy('productCode')}
              >
                <span>품번</span>
                {orderBy.field === 'productCode' && (
                  <>
                    {orderBy.sort === 'desc' ? (
                      <ChevronUpIcon
                        className="-mr-5 ml-2 sm:ml-5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                    ) : orderBy.sort === 'asc' ? (
                      <ChevronDownIcon
                        className="-mr-5 ml-2 sm:ml-5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                    ) : (
                      ''
                    )}
                  </>
                )}
              </div>
            </th>
            <th
              scope="col"
              className={clsx(thClass, 'px-3 py-3.5 border-t border-gray-200')}
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => OrderBy('productName')}
              >
                <span>품명</span>
                {orderBy.field === 'productName' && (
                  <>
                    {orderBy.sort === 'desc' ? (
                      <ChevronUpIcon
                        className="-mr-5 ml-2 sm:ml-5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                    ) : orderBy.sort === 'asc' ? (
                      <ChevronDownIcon
                        className="-mr-5 ml-2 sm:ml-5 h-4 w-4 text-gray-400"
                        aria-hidden="true"
                      />
                    ) : (
                      ''
                    )}
                  </>
                )}
              </div>
            </th>
            <th
              scope="col"
              className={clsx(
                thClass,
                'hidden px-3 py-3.5 sm:table-cell border-t border-gray-200'
              )}
            >
              단위
            </th>
            <th
              scope="col"
              className={clsx(
                thClass,
                'hidden px-3 py-3.5 sm:table-cell border-t border-gray-200'
              )}
            >
              비고
            </th>
            <th
              scope="col"
              className={clsx(
                thClass,
                'py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8 border-r border-t border-gray-200 rounded-tr-lg'
              )}
            >
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {products?.results.map((product, index) => (
            <tr
              key={index}
              onClick={() => {
                setChecked(true);
              }}
            >
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-l border-gray-200',
                  'whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                )}
              >
                {product.internalName}
              </td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'whitespace-nowrap px-3 py-2 text-sm text-gray-500'
                )}
              >
                {product.productName}
              </td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'whitespace-nowrap hidden px-3 py-2 text-sm text-gray-500 sm:table-cell'
                )}
              >
                {product.quantityUomId}
              </td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'whitespace-nowrap hidden px-3 py-2 text-sm text-gray-500 sm:table-cell'
                )}
              ></td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-r border-gray-200',
                  'relative whitespace-nowrap py-2 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                )}
              >
                <Button
                  onClick={() => {
                    setOpen(product);
                  }}
                  variant="outline"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Edit Side
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={1}
        total={50}
        limit={10}
        setPage={setPage}
        setLimit={setLimit}
      />

      {checked && (
        <>
          <div className="h-20 md:h-12 " />
          <div className="fixed bottom-0 right-0 w-full flex justify-center pb-5">
            <div className="h-20 md:h-16 w-[95vw] lg:w-[70vw] flex justify-between bg-white border border-gray-300 rounded-full shadow-2xl shadow-gray-600">
              <div className="flex flex-wrap justify-start items-center pl-5 gap-x-2 gap-y-1">
                <span className="inline-flex items-center gap-x-0.5 rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  6082J-12
                  <button
                    type="button"
                    className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20"
                  >
                    <span className="sr-only">Remove</span>
                    <svg
                      viewBox="0 0 14 14"
                      className="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600/75"
                    >
                      <path d="M4 4l6 6m0-6l-6 6" />
                    </svg>
                    <span className="absolute -inset-1" />
                  </button>
                </span>
                <span className="inline-flex items-center gap-x-0.5 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  6082J-10
                  <button
                    type="button"
                    className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-red-600/20"
                  >
                    <span className="sr-only">Remove</span>
                    <svg
                      viewBox="0 0 14 14"
                      className="h-3.5 w-3.5 stroke-red-600/50 group-hover:stroke-red-600/75"
                    >
                      <path d="M4 4l6 6m0-6l-6 6" />
                    </svg>
                    <span className="absolute -inset-1" />
                  </button>
                </span>
                <span className="inline-flex items-center gap-x-0.5 rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  6063SY-12
                  <button
                    type="button"
                    className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-yellow-600/20"
                  >
                    <span className="sr-only">Remove</span>
                    <svg
                      viewBox="0 0 14 14"
                      className="h-3.5 w-3.5 stroke-yellow-700/50 group-hover:stroke-yellow-700/75"
                    >
                      <path d="M4 4l6 6m0-6l-6 6" />
                    </svg>
                    <span className="absolute -inset-1" />
                  </button>
                </span>
                <span className="inline-flex items-center gap-x-0.5 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  6063SY-5
                  <button
                    type="button"
                    className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-green-600/20"
                  >
                    <span className="sr-only">Remove</span>
                    <svg
                      viewBox="0 0 14 14"
                      className="h-3.5 w-3.5 stroke-green-700/50 group-hover:stroke-green-700/75"
                    >
                      <path d="M4 4l6 6m0-6l-6 6" />
                    </svg>
                    <span className="absolute -inset-1" />
                  </button>
                </span>
                <span className="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  6061SY-12
                  <button
                    type="button"
                    className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-blue-600/20"
                  >
                    <span className="sr-only">Remove</span>
                    <svg
                      viewBox="0 0 14 14"
                      className="h-3.5 w-3.5 stroke-blue-700/50 group-hover:stroke-blue-700/75"
                    >
                      <path d="M4 4l6 6m0-6l-6 6" />
                    </svg>
                    <span className="absolute -inset-1" />
                  </button>
                </span>
              </div>
              <div className="flex items-center pr-5">
                <button
                  onClick={() => {
                    setChecked(false);
                  }}
                  className={clsx(
                    'min-w-[58px]',
                    'items-center justify-center rounded-md text-sm font-medium transition-colors',
                    'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
                    'dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800 dark:bg-gray-600 dark:ring-gray-600 dark:text-white dark:hover:bg-gray-500',
                    'disabled:pointer-events-none data-[state=open]:bg-slate-100  bg-indigo-600 text-white hover:bg-indigo-700 h-9 py-2 px-4'
                  )}
                >
                  등록
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
