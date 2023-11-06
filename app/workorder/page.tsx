'use client';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const people = [
  {
    name: 'LVT 2T AW9165',
    email: '23-10-25-01',
    spec: '5T(0.5) X 9" X 60"',
    pattern: 'AW9868',
    status: 'RUNNING',
    role: '150',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'LVT 2T AT9182',
    email: '23-10-25-02',
    spec: '5T(0.5) X 9" X 60"',
    pattern: 'AW9868',
    status: 'RUNNING',
    role: '160',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'LLT NS 5T AW1691',
    email: '23-10-25-03',
    spec: '5T(0.5) X 9" X 60"',
    pattern: 'AW9868',
    status: 'COMPLETED',
    role: '250',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
  {
    name: 'LLT NS 5T AW1769',
    email: '23-10-25-04',
    spec: '5T(0.5) X 9" X 60"',
    pattern: 'AW9868',
    status: 'COMPLETED',
    role: '97',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'SHX01-0003670338',
    email: '23-10-26-01',
    spec: '5T(0.5) X 9" X 60"',
    pattern: 'AW9868',
    status: 'HOLD',
    role: '100',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'LVT 2.5T AW1477',
    email: '23-10-26-02',
    spec: '5T(0.5) X 9" X 60"',
    pattern: 'AW9868',
    status: 'SCHEDULED',
    role: '37',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
    lastSeen: null,
  },
];

export default function WorkOrder() {
  return (
    <div className="pt-3 mx-auto max-w-4xl w-full">
      <div className="ring-1 ring-gray-300 rounded-lg p-3 grid grid-cols-2 sm:grid-cols-4 gap-3 items-end">
        <select
          id="fixedAsset"
          name="fixedAsset"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-16 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="FA1"
        >
          <option></option>
          <option value="FA1">1호기</option>
          <option value="FA2">2호기</option>
        </select>

        <select
          id="status"
          name="status"
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-16 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option></option>
          <option value="RUNNING">가동</option>
          <option value="WAIT">대기</option>
          <option value="COMPLETED">완료</option>
        </select>

        <input
          type="text"
          name="text"
          id="text"
          className="block w-full rounded-md border-0 text-gray-900 py-1.5 pl-3 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 h-9"
          placeholder="검색어를 입력해주세요"
        />
      </div>

      <ul
        role="list"
        className="divide-y divide-gray-300 overflow-hidden bg-white shadow-sm ring-1 ring-gray-300 sm:rounded-xl mt-5"
      >
        {people.map(person => (
          <Link href="workorder/detail">
            <li
              key={person.email}
              className="relative flex justify-between hover:bg-gray-50"
            >
              <Image src={person.imageUrl} height="50" width="100" alt="" />

              <div
                className={clsx(
                  'flex w-full mr-4 pl-4 justify-between border-l-8',
                  person?.status === 'RUNNING' && 'border-emerald-500',
                  person?.status === 'COMPLETED' && 'border-blue-500',
                  person?.status === 'HOLD' && 'border-yellow-500'
                )}
              >
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {person.email}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    <span>{person.spec}</span>
                    <span className="text-gray-600 font-semibold mx-2">|</span>
                    <span>{person.pattern}</span>
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className=" text-gray-900 mb-1">
                      <span className="text-2xl leading-6">{person.role}</span>
                      {' / '}
                      <span className="text-xl text-gray-400">
                        {person.role}
                      </span>
                    </p>

                    <p
                      className={clsx(
                        person?.status === 'COMPLETED' &&
                          'text-blue-700 bg-blue-50 ring-blue-600/20',
                        person?.status === 'RUNNING' &&
                          'text-green-700 bg-green-50 ring-green-600/20',
                        person?.status === 'SCHEDULED' &&
                          'text-gray-600 bg-gray-50 ring-gray-500/10',
                        person?.status === 'HOLD' &&
                          'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                      )}
                    >
                      {person.status}
                    </p>
                  </div>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>

      <div className="flex justify-center mt-5 cursor-pointer">
        <div className="ring-1 ring-gray-300 rounded-lg p-2 text-gray-500 max-w-xs text-center">
          더보기
        </div>
      </div>
    </div>
  );
}
