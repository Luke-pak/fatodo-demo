'use client';

import { useWorkLogModal, useWorkTimeModal } from '@/store/Modal';
import { Menu, Transition } from '@headlessui/react';
import {
  ClockIcon,
  CubeIcon,
  EllipsisVerticalIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

export default function MobileMenu() {
  const [setWorkTimeOpen] = useWorkTimeModal((state: any) => [state.setOpen]);
  const [setWorkLogOpen] = useWorkLogModal((state: any) => [state.setOpen]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="md:hidden inline-flex items-center rounded-md bg-white px-1 ml-1 py-2 text-sm font-semibold text-gray-900">
          <EllipsisVerticalIcon className="w-5 h-5" />
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="p-1 text-sm font-semibold">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-800'
                  } group flex w-full items-center rounded-md px-2 py-2 justify-center`}
                  onClick={setWorkTimeOpen}
                >
                  <ClockIcon className="w-6 h-6 mr-1" />
                  <span>작업시간</span>
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-800'
                  } group flex w-full items-center rounded-md px-2 py-2 justify-center`}
                  onClick={setWorkLogOpen}
                >
                  <CubeIcon className="w-6 h-6 mr-1" />
                  <span>생산현황</span>
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? 'bg-violet-500 text-white' : 'text-gray-800'
                  } group flex w-full items-center rounded-md px-2 py-2 justify-center bg-white`}
                >
                  <WrenchIcon className="w-6 h-6 mr-1" />
                  <span>비가동</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
