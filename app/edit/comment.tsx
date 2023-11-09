'use client';

import { Listbox, Transition } from '@headlessui/react';
import {
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  CheckCircleIcon,
  PaperClipIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { useState } from 'react';

const moods = [
  {
    name: 'Excited',
    value: 'excited',
    icon: FireIcon,
    iconColor: 'text-white',
    bgColor: 'bg-red-500',
  },
  {
    name: 'Loved',
    value: 'loved',
    icon: HeartIcon,
    iconColor: 'text-white',
    bgColor: 'bg-pink-400',
  },
  {
    name: 'Happy',
    value: 'happy',
    icon: FaceSmileIcon,
    iconColor: 'text-white',
    bgColor: 'bg-green-400',
  },
  {
    name: 'Sad',
    value: 'sad',
    icon: FaceFrownIcon,
    iconColor: 'text-white',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'Thumbsy',
    value: 'thumbsy',
    icon: HandThumbUpIcon,
    iconColor: 'text-white',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'I feel nothing',
    value: null,
    icon: XMarkIconMini,
    iconColor: 'text-gray-400',
    bgColor: 'bg-transparent',
  },
];

export function Comment() {
  const [selected, setSelected] = useState(moods[5]);

  return (
    <>
      <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-200">
        댓글
      </h2>

      <div className="flex mt-1 gap-x-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="flex-none w-6 h-6 rounded-full bg-gray-50 dark:border-white dark:border-2"
        />
        <form action="#" className="relative flex-auto">
          <div className="pb-12 px-2 overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
            <label htmlFor="comment" className="sr-only">
              내용을 입력해주세요
            </label>
            <textarea
              rows={2}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="내용을 입력해주세요"
              defaultValue={''}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  <PaperClipIcon className="w-5 h-5" aria-hidden="true" />
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
              <div className="flex items-center">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="sr-only">
                        Your mood
                      </Listbox.Label>
                      <div className="relative">
                        <Listbox.Button className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                              <span>
                                <FaceSmileIcon
                                  className="flex-shrink-0 w-5 h-5"
                                  aria-hidden="true"
                                />
                                <span className="sr-only">Add your mood</span>
                              </span>
                            ) : (
                              <span>
                                <span
                                  className={clsx(
                                    selected.bgColor,
                                    'flex h-8 w-8 items-center justify-center rounded-full'
                                  )}
                                >
                                  <selected.icon
                                    className="flex-shrink-0 w-5 h-5 text-white"
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="sr-only">{selected.name}</span>
                              </span>
                            )}
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 py-3 mt-1 -ml-6 text-base bg-white rounded-lg shadow w-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            {moods.map(mood => (
                              <Listbox.Option
                                key={mood.value}
                                className={({ active }) =>
                                  clsx(
                                    active ? 'bg-gray-100' : 'bg-white',
                                    'relative cursor-default select-none px-3 py-2'
                                  )
                                }
                                value={mood}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={clsx(
                                      mood.bgColor,
                                      'flex h-8 w-8 items-center justify-center rounded-full'
                                    )}
                                  >
                                    <mood.icon
                                      className={clsx(
                                        mood.iconColor,
                                        'h-5 w-5 flex-shrink-0'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="block ml-3 font-medium truncate">
                                    {mood.name}
                                  </span>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-600 dark:ring-gray-600 dark:text-white dark:hover:bg-gray-500"
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

const activity = [
  {
    id: 1,
    type: 'created',
    person: { name: 'Chelsea Hagon' },
    date: '7d ago',
    dateTime: '2023-01-23T10:32',
  },
  {
    id: 2,
    type: 'edited',
    person: { name: 'Chelsea Hagon' },
    date: '6d ago',
    dateTime: '2023-01-23T11:03',
    msg: '수주수정',
  },
  {
    id: 3,
    type: 'sent',
    person: { name: 'Chelsea Hagon' },
    date: '6d ago',
    dateTime: '2023-01-23T11:24',
    msg: '수주승인',
  },
  {
    id: 4,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment: '재고 출하시 다시 한번 확인 바랍니다.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  {
    id: 5,
    type: 'viewed',
    person: { name: 'Alex Curren' },
    date: '2d ago',
    dateTime: '2023-01-24T09:12',
    msg: '수주수정',
  },
  {
    id: 6,
    type: 'paid',
    person: { name: 'Alex Curren' },
    date: '1d ago',
    dateTime: '2023-01-24T09:20',
    msg: '수주등록',
  },
];

export function Activity() {
  return (
    <>
      <h2 className="text-sm font-semibold leading-6 text-gray-900 mt-6 dark:text-gray-200">
        History
      </h2>
      <ul
        role="list"
        className="mt-1 space-y-6 overflow-y-scroll pr-2 max-h-80"
      >
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id} className="relative flex gap-x-4">
            <div
              className={clsx(
                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                'absolute left-0 top-0 flex w-6 justify-center'
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            {activityItem.type === 'commented' ? (
              <>
                <img
                  src={activityItem.person.imageUrl}
                  alt=""
                  className="relative flex-none w-6 h-6 mt-3 rounded-full bg-gray-50 dark:border-white dark:border-2"
                />

                <div className="flex-auto px-3 py-1 rounded-md ring-1 ring-inset ring-gray-200">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 text-xs leading-5 text-gray-500">
                      <span className="font-medium text-gray-900 dark:text-gray-300">
                        {activityItem.person.name}
                      </span>
                    </div>
                    <time
                      dateTime={activityItem.dateTime}
                      className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                    >
                      {activityItem.date}
                    </time>
                  </div>
                  <p className="text-sm leading-6 text-gray-500 dark:text-white">
                    {activityItem.comment}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex items-center justify-center flex-none w-6 h-6">
                  {activityItem.type === 'paid' ? (
                    <div className="w-6 h-6 dark:bg-white rounded-full flex justify-center items-center">
                      <CheckCircleIcon
                        className="w-6 h-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                  ) : (
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                  )}
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                  <span className="font-medium text-gray-900 dark:text-gray-300">
                    {activityItem.person.name}
                  </span>{' '}
                  {activityItem.msg}
                </p>
                <time
                  dateTime={activityItem.dateTime}
                  className="flex-none py-0.5 text-xs leading-5 text-gray-500"
                >
                  {activityItem.date}
                </time>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
