'use client';

import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

import clsx from 'clsx';

export default function DetailHeader() {
  return (
    <>
      <header className="relative isolate">
        {/* 배경색 */}
        <div
          className="absolute inset-0 overflow-hidden -z-10"
          aria-hidden="true"
        >
          <div className="absolute -mt-16 opacity-50 left-16 top-full transform-gpu blur-3xl xl:left-1/2 xl:-ml-80">
            <div
              className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
        </div>

        {/* 내용 */}
        <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto gap-x-8 lg:mx-0 lg:max-w-none">
            <div className="flex items-center gap-x-6">
              <h1>
                <div className="text-sm leading-6 text-gray-500">
                  Invoice <span className="text-gray-700">CO2310170002</span>
                </div>
                <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                  Signature Floorcoverings Pty LTD
                </div>
              </h1>
            </div>
            <div className="flex items-center gap-x-4 sm:gap-x-6">
              <a
                href="#"
                className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block"
              >
                Edit
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Approve
              </a>

              <Menu as="div" className="relative sm:hidden">
                <Menu.Button className="block p-3 -m-3">
                  <span className="sr-only">More</span>
                  <EllipsisVerticalIcon
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          className={clsx(
                            active ? 'bg-gray-50' : '',
                            'block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900'
                          )}
                        >
                          Copy URL
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={clsx(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
