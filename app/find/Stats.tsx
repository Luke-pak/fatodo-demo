'use client';

import clsx from 'clsx';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';

const stats = [
  {
    name: '이익',
    value: '$405,091',
    previousStat: '$400,000',
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: '마감송장',
    value: '$12,787',
    previousStat: '$6,450',
    change: '+54.02%',
    changeType: 'negative',
  },
  {
    name: '미결송장',
    value: '$245,988',
    previousStat: '$262,972',
    change: '-1.39%',
    changeType: 'positive',
  },
  {
    name: '비용',
    value: '$30,156',
    previousStat: '$27,800',
    change: '+10.18%',
    changeType: 'negative',
  },
];

export function Stats1() {
  return (
    <div className="hidden w-full border border-gray-200 rounded-md sm:block sm:col-span-12 p-1 ">
      <dl className="grid grid-cols-1 gap-px mx-auto bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between px-4 py-2 bg-white gap-x-4 gap-y-2 xl:px-6"
          >
            <dt className="text-sm font-medium leading-6 text-gray-500">
              {stat.name}
            </dt>
            <dd
              className={clsx(
                stat.changeType === 'negative'
                  ? 'text-rose-600'
                  : 'text-gray-700',
                'text-xs font-medium'
              )}
            >
              {stat.change}
            </dd>
            <dd className="flex-none w-full text-3xl font-medium leading-10 tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Stats2() {
  return (
    <div className="hidden w-full sm:block sm:col-span-12">
      <dl className=" grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0">
        {stats.map(item => (
          <div key={item.name} className="px-4 py-2 xl:px-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex flex-col items-baseline text-2xl font-semibold text-indigo-600">
                <span>{item.value}</span>
                <div className="ml-2 text-xs font-medium text-gray-500 text-right w-full">
                  from {item.previousStat}
                </div>
              </div>

              <div
                className={clsx(
                  item.changeType === 'positive'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'positive' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {' '}
                  {item.changeType === 'positive'
                    ? 'Increased'
                    : 'Decreased'}{' '}
                  by{' '}
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
