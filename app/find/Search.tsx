'use client';

import { Button } from '@/components/Button';
import Text from '@/components/Text';
import { useWorkTimeModal } from '@/store/Modal';
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useRef, useState } from 'react';

export function Search1() {
  return (
    <>
      <div className="col-span-12 grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 p-0 border border-gray-200 rounded-md md:p-2">
        <div className="col-span-4 py-1 min-h-[3rem] px-3">
          <Text title="품번" name="internalName" />
        </div>

        <div className="col-span-4 py-1 min-h-[2rem] px-3">
          <Text title="품명" name="productName" />
        </div>

        <div className="col-span-1 sm:col-span-3 py-1 md:pt-8 px-3">
          <Button size="default" type="submit" className="w-full sm:w-40">
            검색
          </Button>
        </div>
      </div>
    </>
  );
}

const dateTerms = [
  { key: 'All', title: '전체' },
  { key: 'WEEK', title: '7일' },
  { key: 'MONTH', title: '당월' },
  { key: 'PRE_M', title: '전월' },
  { key: 'TRE_M', title: '3개월' },
];

export function Search2() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="col-span-12 grid grid-cols-12 p-3 border border-gray-200 rounded-md">
        <div className="col-span-12 sm:col-span-8 py-1 min-h-[3rem] px-3">
          <button
            className="border border-slate-400 rounded-lg text-slate-400 flex justify-between h-9 items-center w-full sm:w-3/4 px-3"
            onClick={() => setOpen(true)}
          >
            <div className="flex items-center text-black dark:text-gray-200">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span className="border-r-2 px-2">검색</span>
            </div>
            <div className="text-xs flex gap-1">
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-transparent dark:border-2 dark:text-gray-300">
                2023-11-07~2023-11-14
              </span>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-transparent dark:border-2 dark:text-green-400 dark:border-green-400">
                품명
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-transparent dark:border-2 dark:text-blue-400 dark:border-blue-400">
                품번
              </span>
            </div>
            <div className="text-sm">옵션</div>
          </button>
        </div>

        <div className="col-span-12 sm:col-span-4 py-1 min-h-[3rem] px-3 flex justify-end ">
          <Button size="default">제품등록</Button>
        </div>
      </div>

      <Transition.Root show={open}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center pt-20">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900 mb-4 flex items-center"
                      >
                        <MagnifyingGlassIcon className="h-5 w-5 mr-3" />
                        <span>검색옵션</span>
                      </Dialog.Title>

                      <div className="mt-2 w-[90vw] sm:w-[60vw] grid grid-cols-12 gap-3">
                        <div className="mt-1 col-span-4">
                          <Text name="internalName" title="품번" />
                        </div>
                        <div className="mt-1 col-span-4">
                          <Text name="productName" title="품명" />
                        </div>

                        <div className="mt-1 col-span-12">
                          <label className="block mb-2 text-sm font-semibold text-gray-900">
                            기간 설정
                          </label>
                          {/* <div className="grid grid-cols-6">
                            {dateTerms.map(item => (
                              <div key={item.key} className="flex items-center">
                                <input
                                  id={item.key}
                                  name="term"
                                  type="radio"
                                  defaultChecked={false}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label
                                  htmlFor={item.key}
                                  className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {item.title}
                                </label>
                              </div>
                            ))}
                          </div> */}

                          <div className="grid grid-cols-10 gap-3">
                            {dateTerms.map(item => (
                              <button
                                key={item.key}
                                className="ring-2 ring-indigo-400 px-2 py-1 rounded-md text-gray-600 hover:ring-transparent hover:bg-indigo-600 hover:text-white text-sm"
                              >
                                {item.title}
                              </button>
                            ))}
                          </div>

                          <div className="grid grid-cols-10 gap-2 mt-2">
                            <input
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-2 text-center"
                              type="date"
                            />
                            <span className="text-center text-2xl"> ~ </span>
                            <input
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 col-span-2 text-center"
                              type="date"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <Button
                      variant="default"
                      onClick={() => setOpen(false)}
                      className="mx-1"
                    >
                      검색
                    </Button>
                    <Button
                      variant="darkoutline"
                      onClick={() => setOpen(false)}
                      className="mx-1"
                    >
                      취소
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export function Search3() {
  const [open, setOpen] = useState(false);
  const [recent, setRecent] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const OnFocus = () => {
    setRecent(true);
    setTimeout(() => searchInput.current?.focus(), 200);
  };

  return (
    <>
      <div className="col-span-12 grid grid-cols-12 p-3 border border-gray-200 rounded-md">
        <div className="col-span-10 sm:col-span-10 py-1 min-h-[3rem] px-3 relative">
          <div className="border border-slate-400 rounded-lg flex justify-between h-9 items-center w-full sm:w-[450px] md:w-[580px] px-3">
            <div className="flex justify-start w-full">
              <div className="flex items-center text-black dark:text-gray-200 font-medium min-w-[70px]">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span className="border-r-2 px-2">검색</span>
              </div>

              <input
                type="text"
                name="search"
                className="focus:outline-none px-2 text-gray-900 w-full"
                autoComplete="off"
                onFocus={OnFocus}
              />
            </div>

            <div
              className="text-sm cursor-pointer min-w-[50px] text-right font-medium"
              onClick={() => setOpen(!open)}
            >
              옵션
            </div>
          </div>

          <div
            className={clsx(
              'z-40 absolute top-1 pt-[2px] bg-white border border-slate-400 rounded-lg min-h-[2.3rem] w-full sm:w-[450px] md:w-[580px] px-3',
              recent || 'hidden'
            )}
          >
            {/* 검색창 */}

            <div className="flex justify-start w-full pt-1">
              <div className="flex items-center text-black dark:text-gray-200 font-medium min-w-[70px]">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span className="border-r-2 px-2">검색</span>
              </div>

              <div>
                <input
                  type="text"
                  name="search"
                  className="focus:outline-none px-2 text-gray-900 w-full"
                  autoComplete="off"
                  onBlur={() => setRecent(false)}
                  ref={searchInput}
                />
              </div>
            </div>
            {/* 최근검색어 */}

            <div className="w-full border-t border-gray-400 mt-2 pt-1 font-medium">
              <ul>
                <li className="py-2 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <span className="font-medium w-16 mr-5">J</span>
                    <span className="flex flex-wrap">
                      <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                        품명
                      </span>
                      <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                        품번
                      </span>
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">11-22</span>
                </li>

                <li className="py-2 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <span className="font-medium w-16 mr-5">6082</span>
                    <span className="flex flex-wrap">
                      <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                        품명
                      </span>
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">11-20</span>
                </li>

                <li className="py-2 flex justify-between items-center cursor-pointer">
                  <div className="flex items-center">
                    <span className="font-medium w-16 mr-5">SY</span>
                    <span className="flex flex-wrap">
                      <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                        품번
                      </span>
                      <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                        규격
                      </span>
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">11-01</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-2 py-1 min-h-[3rem] sm:px-3 flex justify-end">
          <Button size="default">검색</Button>
        </div>
        {/* 
        <div className="col-span-12 pl-2">
          {open && (
            <>
              <div className="text-sm pl-2 mt-2 flex gap-2 items-center">
                <SearchFilter />
              </div>

              <div className="text-sm pl-2 mt-2 flex-wrap flex justify-start items-center font-semibold">
                <span className="min-w-[65px] inline-flex mr-2 my-1 font-medium">
                  검색조건 :
                </span>
                <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                  품명
                </span>
                <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                  규격
                </span>
                <span className="border border-transparent bg-indigo-300 rounded-md px-2 inline-flex mr-1 my-1">
                  가동
                </span>
                <span className="border border-transparent bg-green-300 rounded-md px-2 inline-flex mr-1 my-1 text-green-900">
                  23-11-10 ~ 23-11-20
                </span>
              </div>
            </>
          )}
        </div> */}

        <div className="col-span-12 pl-2 flex flex-wrap">
          {open && (
            <>
              <div className="text-sm px-2 mt-2 flex gap-2 items-center">
                <SearchFilter />
              </div>

              <div className="text-sm pl-2 mt-2 flex-wrap flex justify-start items-center font-semibold">
                <span className="min-w-[65px] inline-flex mr-2 my-1 font-medium">
                  검색조건 :
                </span>
                <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                  품명
                </span>
                <span className="border border-transparent bg-gray-300 rounded-md px-2 inline-flex mr-1 my-1">
                  규격
                </span>
                <span className="border border-transparent bg-indigo-300 rounded-md px-2 inline-flex mr-1 my-1">
                  가동
                </span>
                <span className="border border-transparent bg-green-300 rounded-md px-2 inline-flex mr-1 my-1 text-green-900">
                  23-11-10 ~ 23-11-20
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const filters = [
  {
    id: 'filter',
    name: '검색항목',
    type: 'multi',
    options: [
      { value: 'productName', label: '품명' },
      { value: 'internalName', label: '품번' },
      { value: 'spec', label: '규격' },
      { value: 'customer', label: '거래처' },
    ],
  },
  {
    id: 'status',
    name: '상태',
    type: 'multi',
    options: [
      { value: 'CREATED', label: '작성' },
      { value: 'APPROVED', label: '승인' },
      { value: 'RUNNING', label: '가동' },
      { value: 'COMPLETED', label: '완료' },
      { value: 'CANCELLED', label: '취소' },
    ],
  },

  {
    id: 'date',
    name: '날짜',
    type: 'single',
    options: [
      { value: 'DAY', label: '1일' },
      { value: 'WEEK', label: '1주' },
      { value: 'MONTH', label: '1개월' },
      { value: 'YEAR', label: '1년' },
      //{ value: 'CUSTOM', label: '직접선택' },
    ],
  },
];

function SearchFilter() {
  const [setOpen] = useWorkTimeModal((state: any) => [state.setOpen]);

  return (
    <section aria-labelledby="filter-heading">
      <h2 id="filter-heading" className="sr-only">
        Search filters
      </h2>

      <div className="flex items-center justify-between">
        <Popover.Group className="flex gap-x-4">
          {filters.map((section, sectionIdx) => (
            <Popover
              as="div"
              key={section.name}
              id={`desktop-menu-${sectionIdx}`}
              className="relative inline-block text-left"
            >
              <div>
                <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                  <span>{section.name}</span>

                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="relative z-20"
              >
                <Popover.Panel className="absolute right-0 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <form className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        {section.type === 'multi' ? (
                          <>
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                            >
                              {option.label}
                            </label>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                            >
                              {option.label}
                            </button>
                          </>
                        )}
                      </div>
                    ))}

                    {section.id === 'date' && (
                      <button
                        type="button"
                        className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                        onClick={setOpen}
                      >
                        직접선택
                      </button>
                    )}
                  </form>
                </Popover.Panel>
              </Transition>
            </Popover>
          ))}
        </Popover.Group>
      </div>
    </section>
  );
}
