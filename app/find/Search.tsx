'use client';

import { Button } from '@/components/Button';
import Text from '@/components/Text';
import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
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
            className="border border-slate-400 rounded-lg text-slate-400 flex justify-between h-9 items-center w-full sm:w-1/2 px-3"
            onClick={() => setOpen(true)}
          >
            <div className="flex items-center text-black">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span className="border-r-2 px-2">검색</span>
            </div>

            <div className="text-sm">옵션</div>
          </button>
        </div>

        <div className="col-span-12 sm:col-span-4 py-1 min-h-[3rem] px-3 flex justify-end">
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

                      <div className="mt-2 w-[90vw] sm:w-[60vw]">
                        <div className="my-5">
                          <Text name="internalName" title="품번" />
                        </div>
                        <div className="my-5">
                          <Text name="productName" title="품명" />
                        </div>

                        <div className="my-5">
                          <label className="block mb-2 text-sm font-semibold text-gray-900">
                            기간 설정
                          </label>
                          <div className="grid grid-cols-6">
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
