'use client';
import { Menu, Switch, Transition } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import clsx from 'clsx';
import useLogin from '@/store/Login';
import { useEffect, useState } from 'react';

export default function ProfileMenu() {
  const [setLogout] = useLogin((state: any) => [state.setLogout]);
  const [darkMode, useDarkMode] = useState(false);

  const SetDarkMode = (state: boolean) => {
    if (state) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    useDarkMode(state);
  };

  useEffect(() => {
    SetDarkMode(localStorage.getItem('theme') === 'dark');
  }, []);

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
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
        <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={clsx(
                  active ? 'bg-gray-100' : '',
                  'px-4 py-2 text-sm text-gray-700 flex'
                )}
              >
                <UserIcon className="h-5 w-5 mr-3" />
                <span>프로필</span>
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={clsx(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                  'flex'
                )}
              >
                <span className="m-0.5 mr-3">
                  <Image src="/image/us.svg" alt="US" width={20} height={20} />
                </span>
                <span>영어</span>
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={clsx(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700',
                  'flex'
                )}
              >
                <span className="m-0.5 mr-3">
                  <Image src="/image/kr.svg" alt="KR" width={20} height={20} />
                </span>
                <span>한국어</span>
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={clsx(
                  active ? 'bg-gray-100' : '',
                  'px-4 py-2 text-sm text-gray-700 flex'
                )}
                onClick={setLogout}
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5 ml-0.5 mr-3" />
                <span>로그아웃</span>
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            <Switch.Group as="div" className="flex items-center my-2">
              <Switch
                checked={darkMode}
                onChange={SetDarkMode}
                className={clsx(
                  darkMode ? 'bg-indigo-600' : 'bg-gray-100',
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ml-4'
                )}
              >
                <span className="sr-only">Dark Mode</span>
                <span
                  className={clsx(
                    darkMode
                      ? 'translate-x-5  bg-white'
                      : 'translate-x-0 bg-indigo-600',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out'
                  )}
                >
                  <span
                    className={clsx(
                      darkMode
                        ? 'opacity-0 duration-100 ease-out'
                        : 'opacity-100 duration-200 ease-in',
                      'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                  >
                    <SunIcon className="w-5 h-5  text-white" />
                  </span>
                  <span
                    className={clsx(
                      darkMode
                        ? 'opacity-100 duration-200 ease-in'
                        : 'opacity-0 duration-100 ease-out',
                      'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                  >
                    <MoonIcon className="w-5 h-5 text-indigo-600" />
                  </span>
                </span>
              </Switch>
              <Switch.Label as="span" className="ml-3">
                <span className="text-md font-semibold text-gray-700">
                  {darkMode ? 'Dark' : 'Light'}
                </span>
              </Switch.Label>
            </Switch.Group>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
