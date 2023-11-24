'use client';

import { Popover, Transition, Dialog, Tab } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import clsx from 'clsx';
import Link from 'next/link';
import ProfileMenu from './ProfileMenu';
import Image from 'next/image';
import useOpenMenu from '@/store/OpenMenu';
import { usePathname } from 'next/navigation';
import useNotification from '@/store/Notification';

const navigation = [
  { name: '검색', href: '/find', current: false },
  { name: '검색1', href: '/find1', current: false },
  { name: '상세화면', href: '/edit', current: false },
  { name: '작업지시서', href: '/workorder', current: false },
];

export default function Header1() {
  const setOpen = useOpenMenu((state: any) => state.setOpenMenu);
  const pathname = usePathname();

  const [notification, setNotiOpen] = useNotification((state: any) => [
    state.notification,
    state.setOpen,
  ]);

  return (
    <>
      <div className="fixed z-30 w-full bg-gray-800">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setOpen()}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Databox"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  <Popover.Group className="hidden sm:block lg:flex-1 lg:self-stretch">
                    <div className="flex h-full space-x-2">
                      <SalesMenu />
                      <ManufactureMenu />
                      <DemoMenu />

                      {navigation.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            item.href === pathname
                              ? 'bg-gray-900 text-white border border-indigo-500 shadow-md shadow-indigo-500'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Group>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* =====👈👈👈👈👈 Notification Buttton 👉👉👉👉👉 ===== */}
              <button
                type="button"
                className={clsx(
                  'relative p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white',
                  notification && 'text-amber-400'
                )}
                onClick={setNotiOpen}
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              {/* =====👈👈👈👈👈 Profile Menu 👉👉👉👉👉 ===== */}
              <ProfileMenu />
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </>
  );
}

function SalesMenu() {
  const menuName = '영업';
  const path = '/sale';
  const pathname = usePathname();

  return (
    <>
      <Popover key={menuName} className="flex">
        {({ open, close }) => (
          <>
            <div className="relative flex">
              <Popover.Button
                className={clsx(
                  open &&
                    pathname.indexOf(path) === -1 &&
                    'bg-gray-900 text-white border-b-2 border-indigo-600',
                  !open &&
                    pathname.indexOf(path) === -1 &&
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                  !open &&
                    pathname.indexOf(path) > -1 &&
                    'bg-gray-900 text-white border border-indigo-500 shadow-md shadow-indigo-500',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {menuName}
                <span
                  className={clsx(
                    path === pathname ? 'bg-indigo-600' : '',
                    'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform'
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 top-16" />
              <Popover.Panel className="absolute inset-x-0 top-full shadow-2xl shadow-gray-500">
                <div
                  className="absolute inset-0 bg-white shadow"
                  aria-hidden="true"
                />

                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-8">
                      {/* 메뉴 왼쪽 */}
                      <div className="grid grid-cols-1 grid-rows-1 gap-8 text-sm">
                        <Image
                          src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                          width={400}
                          height={400}
                          alt=""
                        />
                      </div>

                      {/* 메뉴 오른쪽 */}
                      <div className="col-span-2 grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                        <div className="border-r border-gray-200">
                          <p className="font-semibold text-gray-900">영업</p>
                          <ul role="list" className="mt-4 space-y-4">
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                                onClick={close}
                              >
                                수주등록
                              </Link>
                            </li>
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                                onClick={close}
                              >
                                수주현황
                              </Link>
                            </li>

                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                                onClick={close}
                              >
                                판매단가
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="border-r border-gray-200">
                          <p className="font-semibold text-gray-900">출하</p>
                          <ul role="list" className="mt-4 space-y-4">
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                              >
                                재고현황
                              </Link>
                            </li>
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                                onClick={close}
                              >
                                출하현황
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

function ManufactureMenu() {
  const menuName = '생산';
  const path = '/manufacture';
  const pathname = usePathname();

  return (
    <>
      <Popover key={menuName} className="flex">
        {({ open, close }) => (
          <>
            <div className="relative flex">
              <Popover.Button
                className={clsx(
                  open &&
                    pathname.indexOf(path) === -1 &&
                    'bg-gray-900 text-white border-b-2 border-indigo-600',
                  !open &&
                    pathname.indexOf(path) === -1 &&
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                  !open &&
                    pathname.indexOf(path) > -1 &&
                    'bg-gray-900 text-white border border-indigo-500 shadow-md shadow-indigo-500',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {menuName}
                <span
                  className={clsx(
                    path === pathname ? 'bg-indigo-600' : '',
                    'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform'
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 top-16" />
              <Popover.Panel className="absolute inset-x-0 top-full shadow-2xl shadow-gray-500">
                <div
                  className="absolute inset-0 bg-white shadow"
                  aria-hidden="true"
                />

                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-8">
                      {/* 메뉴 왼쪽 */}
                      <div className="grid grid-cols-1 grid-rows-1 text-sm">
                        <div
                          className="bg-gradient-to-br from-[#FF80B5] to-[#9089FC] h-32 w-full relative cursor-pointer"
                          onClick={close}
                        >
                          <div className="bg-white h-10 w-full opacity-25 absolute left-0 bottom-0 hover:bg-gray-600 transition-colors duration-300" />
                          <div className="absolute right-0 bottom-0 pr-5 text-white font-medium flex items-center h-10">
                            <span>바로가기</span>
                            <span>
                              <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </span>
                          </div>
                        </div>
                        <div
                          className="bg-gradient-to-br from-[#6865ff] to-[#ff3939] h-32 w-full relative cursor-pointer"
                          onClick={close}
                        >
                          <div className="bg-white h-10 w-full opacity-25 absolute left-0 bottom-0 hover:bg-gray-600 transition-colors duration-300" />
                          <div className="absolute right-0 bottom-0 pr-5 text-white font-medium flex items-center h-10">
                            <span>바로가기</span>
                            <span>
                              <ArrowRightIcon className="h-5 w-5 ml-2" />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 메뉴 오른쪽 */}
                      <div className="col-span-2 grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                        <div className="border-r border-gray-200">
                          <p className="font-semibold text-gray-900">
                            생산의뢰서
                          </p>
                          <ul role="list" className="mt-4 space-y-4">
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                                onClick={close}
                              >
                                생산의뢰서
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="border-r border-gray-200">
                          <p className="font-semibold text-gray-900">
                            생산계획
                          </p>
                          <ul role="list" className="mt-4 space-y-4">
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                                onClick={close}
                              >
                                타일생산계획
                              </Link>
                            </li>
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="#"
                                onClick={close}
                              >
                                원단생산계획
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

function DemoMenu() {
  const menuName = '예제';
  const path = '/demo';
  const pathname = usePathname();

  return (
    <>
      <Popover key={menuName} className="flex">
        {({ open, close }) => (
          <>
            <div className="relative flex">
              <Popover.Button
                className={clsx(
                  open &&
                    pathname.indexOf(path) === -1 &&
                    'bg-gray-900 text-white border-b-2 border-indigo-600',
                  !open &&
                    pathname.indexOf(path) === -1 &&
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                  !open &&
                    pathname.indexOf(path) > -1 &&
                    'bg-gray-900 text-white border border-indigo-500 shadow-md shadow-indigo-500',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {menuName}
                <span
                  className={clsx(
                    path === pathname ? 'bg-indigo-600' : '',
                    'absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform'
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 top-16" />
              <Popover.Panel className="absolute inset-x-0 top-full shadow-2xl shadow-gray-500">
                <div
                  className="absolute inset-0 bg-white shadow"
                  aria-hidden="true"
                />

                <div className="relative bg-white">
                  <div className="mx-auto max-w-7xl px-8">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-8">
                      {/* 메뉴 오른쪽 */}
                      <div className="col-span-3 grid grid-cols-4 gap-x-8 gap-y-10 text-sm text-gray-500">
                        <div className="border-r border-gray-200">
                          <p className="font-semibold text-gray-900">예제</p>
                          <ul role="list" className="mt-4 space-y-4">
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="/find"
                                onClick={close}
                              >
                                검색
                              </Link>
                            </li>
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="/find1"
                                onClick={close}
                              >
                                검색1
                              </Link>
                            </li>
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="/edit"
                                onClick={close}
                              >
                                상세화면
                              </Link>
                            </li>
                            <li className="flex">
                              <Link
                                className="hover:text-indigo-700 hover:font-semibold text-gray-400 transition-colors duration-500 text-lg"
                                href="/workorder"
                                onClick={close}
                              >
                                작업지시서
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

function MobileMenu() {
  const [open, setClose] = useOpenMenu((state: any) => [
    state.isOpenMenu,
    state.setCloseMenu,
  ]);

  return (
    <Transition.Root show={open}>
      <Dialog
        as="div"
        className="relative z-40 sm:hidden"
        onClose={() => setClose()}
      >
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex min-w-[90vw] max-w-[90vw] flex-col overflow-y-auto min-h-[100vh] bg-white pb-12 shadow-xl">
              <div className="absolute right-0 p-4">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setClose()}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-0">
                <div className="bg-gray-900 border-r border-gray-300 py-4">
                  <Tab.List className="flex px-4 flex-wrap justify-start gap-2 pr-9">
                    <Tab
                      key="Sale"
                      className={({ selected }) =>
                        clsx(
                          selected
                            ? 'bg-indigo-800 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )
                      }
                    >
                      영업
                    </Tab>

                    <Tab
                      key="Manufacture"
                      className={({ selected }) =>
                        clsx(
                          selected
                            ? 'bg-indigo-800 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )
                      }
                    >
                      생산
                    </Tab>

                    <Tab
                      key="Demo"
                      className={({ selected }) =>
                        clsx(
                          selected
                            ? 'bg-indigo-800 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )
                      }
                    >
                      예제
                    </Tab>
                  </Tab.List>
                </div>

                <Tab.Panels>
                  <Tab.Panel className="p-4" key="Sale">
                    <div className="mb-10">
                      <p className="font-medium text-gray-900">수주</p>

                      <div className="grid grid-cols-2 mt-2 gap-2">
                        <Link
                          className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                          href="#"
                        >
                          수주등록
                        </Link>
                        <Link
                          className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                          href="#"
                        >
                          수주현황
                        </Link>
                        <Link
                          className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                          href="#"
                        >
                          판매단가
                        </Link>
                      </div>
                    </div>

                    <div className="mb-10">
                      <p className="font-medium text-gray-900">출하</p>

                      <div className="grid grid-cols-2 mt-2 gap-2">
                        <Link
                          className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                          href="#"
                        >
                          재고현황
                        </Link>
                        <Link
                          className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                          href="#"
                        >
                          출하현황
                        </Link>
                      </div>
                    </div>

                    <div className="absolute">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                        width={400}
                        height={200}
                        alt=""
                      />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="p-4" key="Manufacture">
                    <div className="mb-5">
                      <Link
                        className="hover:text-indigo-700 hover:font-semibold text-gray-900 transition-colors duration-300 font-medium"
                        href="#"
                      >
                        생산의뢰서
                      </Link>
                    </div>

                    <div className="mb-5">
                      <p className="font-medium text-gray-900">생산계획</p>
                      <div className="grid grid-cols-2 mt-2 gap-2">
                        <Link
                          className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                          href="#"
                        >
                          타일생산계획
                        </Link>
                        <Link
                          className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                          href="#"
                        >
                          원단생산계획
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 mt-10">
                      <div className="bg-gradient-to-br from-[#FF80B5] to-[#9089FC] h-32 w-full relative cursor-pointer">
                        <div className="bg-white h-10 w-full opacity-25 absolute left-0 bottom-0 hover:bg-gray-600 transition-colors duration-300" />
                        <div className="absolute right-0 bottom-0 pr-5 text-white font-medium flex items-center h-10">
                          <span>바로가기</span>
                          <span>
                            <ArrowRightIcon className="h-5 w-5 ml-2" />
                          </span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-[#6865ff] to-[#ff3939] h-32 w-full relative cursor-pointer">
                        <div className="bg-white h-10 w-full opacity-25 absolute left-0 bottom-0 hover:bg-gray-600 transition-colors duration-300" />
                        <div className="absolute right-0 bottom-0 pr-5 text-white font-medium flex items-center h-10">
                          <span>바로가기</span>
                          <span>
                            <ArrowRightIcon className="h-5 w-5 ml-2" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>

                  <Tab.Panel className="p-4" key="Demo">
                    <div className="mb-5">
                      <p className="font-medium text-gray-900">예제</p>
                      <div className="grid grid-cols-2 mt-2 gap-2">
                        {navigation.map(item => (
                          <Link
                            className="hover:text-indigo-700 hover:font-semibold text-gray-500 transition-colors duration-300 text-lg"
                            href={item.href}
                            key={item.name}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
