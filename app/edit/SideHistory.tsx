'use client';

import useSidebar from '@/store/ProductSidebar';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Activity, Comment } from './comment';

export default function SideHitory() {
  const [open, setClose] = useSidebar((state: any) => [
    state.isOpen,
    state.setClose,
  ]);

  return (
    <Transition.Root show={open} className="fixed mt-10">
      <Dialog as="div" className="relative z-10" onClose={setClose}>
        <Transition.Child
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed right-0 flex h-full max-w-full pl-10 pointer-events-none top-16 sm:pl-16">
              <Transition.Child
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen h-full max-w-2xl pointer-events-auto">
                  <form className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl dark:bg-gray-900">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="absolute top-0 w-full p-4 bg-gray-100 sm:px-6 pr-14 dark:bg-gray-700 z-10">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                              History
                            </Dialog.Title>
                          </div>
                          <div className="flex items-center h-7">
                            <button
                              type="button"
                              className="relative text-gray-400 hover:text-gray-500"
                              onClick={setClose}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="py-3 mt-16 mb-32 sm:mb-20 pr-12 pl-6">
                        <Comment />
                        <Activity />
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="absolute w-full px-4 pt-2 pb-4 bg-white border-t border-gray-200 bottom-16 sm:px-6 pr-14 dark:bg-gray-700 dark:border-0">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-600 dark:ring-gray-600 dark:text-white dark:hover:bg-gray-500"
                          onClick={setClose}
                        >
                          취소
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
