'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const menus = [
  { name: '검색', href: '/find', current: false },
  { name: '검색1', href: '/find1', current: false },
];

export default function DropMenu({ close }: any) {
  return (
    <Menu as="div" className="relative inline-block w-full text-left sm:w-auto">
      <Menu.Button className="w-full px-3 py-2 text-sm font-medium text-left text-gray-300 rounded-md sm:w-auto hover:bg-gray-700 hover:text-white flex items-center justify-between">
        <span>검색</span>
        <ChevronDownIcon className="w-4 h-4 ml-3" />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-50 w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menus.map(menu => (
            <Menu.Item key={menu.name}>
              {({ active }) => (
                <Link
                  href={menu.href}
                  className={`${
                    active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={close}
                >
                  {menu.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
