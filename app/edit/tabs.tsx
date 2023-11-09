'use client';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

const tabs = [
  { name: '수주항목', href: '#', current: true },
  { name: '출하', href: '#', current: false },
  { name: '비고', href: '#', current: false },
];

export default function Tabs() {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        <Tab.List>
          {tabs.map(tab => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                clsx(
                  selected
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-500'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300',
                  'whitespace-nowrap border-b-2 py-3 px-5 text-sm font-semibold'
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
      </nav>
    </div>
  );
}
