'use client';

import useSidebar from '@/store/Sidebar';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const team = [
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Sidebar() {
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
                  <form className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="absolute top-0 w-full p-4 bg-gray-100 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                              제품
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
                      <div className="py-6 mt-16 mb-20 space-y-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                        <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5">
                              품번
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        {/* Team members */}
                        <div className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <h3 className="text-sm font-medium leading-6 text-gray-900">
                              Team Members
                            </h3>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="flex space-x-2">
                              {team.map(person => (
                                <a
                                  key={person.email}
                                  href={person.href}
                                  className="flex-shrink-0 rounded-full hover:opacity-75"
                                >
                                  <Image
                                    className="inline-block w-8 h-8 rounded-full"
                                    src={person.imageUrl}
                                    alt={person.name}
                                    width={20}
                                    height={20}
                                  />
                                </a>
                              ))}

                              <button
                                type="button"
                                className="relative inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 bg-white border-2 border-gray-200 border-dashed rounded-full hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                <span className="absolute -inset-2" />
                                <span className="sr-only">Add team member</span>
                                <PlusIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Privacy */}
                        <fieldset className="px-4 space-y-2 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <legend className="sr-only">Privacy</legend>
                          <div
                            className="text-sm font-medium leading-6 text-gray-900"
                            aria-hidden="true"
                          >
                            Privacy
                          </div>
                          <div className="space-y-5 sm:col-span-2">
                            <div className="space-y-5 sm:mt-0">
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-6">
                                  <input
                                    id="public-access"
                                    name="privacy"
                                    aria-describedby="public-access-description"
                                    type="radio"
                                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                                    defaultChecked
                                  />
                                </div>
                                <div className="text-sm leading-6 pl-7">
                                  <label
                                    htmlFor="public-access"
                                    className="font-medium text-gray-900"
                                  >
                                    Public access
                                  </label>
                                  <p
                                    id="public-access-description"
                                    className="text-gray-500"
                                  >
                                    Everyone with the link will see this project
                                  </p>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-6">
                                  <input
                                    id="restricted-access"
                                    name="privacy"
                                    aria-describedby="restricted-access-description"
                                    type="radio"
                                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="text-sm leading-6 pl-7">
                                  <label
                                    htmlFor="restricted-access"
                                    className="font-medium text-gray-900"
                                  >
                                    Private to Project Members
                                  </label>
                                  <p
                                    id="restricted-access-description"
                                    className="text-gray-500"
                                  >
                                    Only members of this project would be able
                                    to access
                                  </p>
                                </div>
                              </div>
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-6">
                                  <input
                                    id="private-access"
                                    name="privacy"
                                    aria-describedby="private-access-description"
                                    type="radio"
                                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="text-sm leading-6 pl-7">
                                  <label
                                    htmlFor="private-access"
                                    className="font-medium text-gray-900"
                                  >
                                    Private to you
                                  </label>
                                  <p
                                    id="private-access-description"
                                    className="text-gray-500"
                                  >
                                    You are the only one able to access this
                                    project
                                  </p>
                                </div>
                              </div>
                            </div>
                            <hr className="border-gray-200" />
                            <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                              <div>
                                <a
                                  href="#"
                                  className="group flex items-center space-x-2.5 text-sm font-medium text-indigo-600 hover:text-indigo-900"
                                >
                                  <LinkIcon
                                    className="w-5 h-5 text-indigo-500 group-hover:text-indigo-900"
                                    aria-hidden="true"
                                  />
                                  <span>Copy link</span>
                                </a>
                              </div>
                              <div>
                                <a
                                  href="#"
                                  className="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900"
                                >
                                  <QuestionMarkCircleIcon
                                    className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  <span>Learn more about sharing</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="absolute w-full px-4 pt-2 pb-4 bg-white border-t border-gray-200 bottom-16 sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="px-3 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={setClose}
                        >
                          취소
                        </button>

                        <button
                          type="submit"
                          className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          수정
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
