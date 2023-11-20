'use client';

import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const inputClasses =
  'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
const inputDark =
  'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

const orderHeader = {
  header: [
    { name: 'orderId', title: '수주번호', value: 'CO2310170002' },
    { name: 'po', title: 'PO NO', value: '119936' },
    { name: 'orderDate', title: '수주일', value: '2023-10-17' },
    { name: 'creater', title: '작성자', value: '김혜은' },
    { name: 'exportType', title: '수출번호', value: '직수출' },
    { name: 'estimatedDeliveryDate', title: '납기예정일', value: '2023-11-07' },
  ],

  customer: [
    {
      name: 'customer',
      title: '거래처',
      value: 'Signature Floorcoverings Pty LTD',
    },
    { name: 'country', title: '국가', value: 'USA' },

    {
      name: 'deliveryAddress',
      title: '배송주소',
      value: '13 WURUNDJERI DRIVE',
    },
  ],

  exchange: [
    { name: 'currency', title: '거래통화', value: 'USD' },
    { name: 'exchange', title: '환율', value: '1150' },
  ],
};

export function HeaderSection() {
  return (
    <section>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full grid grid-cols-12 items-center py-3">
              <span
                className={clsx(
                  open ? 'text-indigo-600' : 'text-gray-900',
                  'text-sm flex col-span-11 flex-wrap gap-y-3'
                )}
              >
                {orderHeader.header?.map(item => (
                  <span className="inline-flex" key={item.name}>
                    <p className="text-gray-500 font-medium mr-1">
                      {item.title} :{' '}
                    </p>
                    <p className="text-gray-900 font-semibold pr-2 mr-2 border-r-2 border-gray-300 dark:text-gray-300">
                      {item.value}
                    </p>
                  </span>
                ))}
              </span>
              <span className="flex items-center col-span-1 justify-end">
                {open ? (
                  <MinusIcon
                    className="block h-4 w-4 text-indigo-400 group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                ) : (
                  <PlusIcon
                    className="block h-4 w-4 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Disclosure.Button>

            <Disclosure.Panel
              as="div"
              className="pt-2 border-t border-gray-300 mt-2"
            >
              <dl className="grid text-sm leading-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {orderHeader.header.map((item, index) => {
                  return (
                    <div className={clsx('mt-2 sm:mt-0 pb-2')} key={index}>
                      <dt className="text-gray-500 mb-1 font-medium dark:text-gray-300">
                        {item.title}
                      </dt>{' '}
                      <dd className="text-gray-900">
                        <input
                          type="text"
                          name={item.name}
                          className={clsx(inputClasses, inputDark)}
                          defaultValue={item.value}
                        />
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
}

export function CustomerSection() {
  return (
    <section>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full grid grid-cols-12 items-center py-3">
              <span
                className={clsx(
                  open ? 'text-indigo-600' : 'text-gray-900',
                  'text-sm flex col-span-11 flex-wrap gap-y-3'
                )}
              >
                {orderHeader.customer?.map(item => (
                  <span className="inline-flex" key={item.name}>
                    <p className="text-gray-500 font-medium mr-1">
                      {item.title} :{' '}
                    </p>
                    <p className="text-gray-900 font-semibold pr-2 mr-2 border-r-2 border-gray-300 dark:text-gray-300">
                      {item.value}
                    </p>
                  </span>
                ))}
              </span>
              <span className="flex items-center col-span-1 justify-end">
                {open ? (
                  <MinusIcon
                    className="block h-4 w-4 text-indigo-400 group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                ) : (
                  <PlusIcon
                    className="block h-4 w-4 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Disclosure.Button>

            <Disclosure.Panel
              as="div"
              className="pt-2 border-t border-gray-300 mt-2"
            >
              <dl className="grid text-sm leading-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {orderHeader.customer.map((item, index) => {
                  return (
                    <div className={clsx('mt-2 sm:mt-0 pb-2')} key={index}>
                      <dt className="text-gray-500 mb-1 font-medium dark:text-gray-300">
                        {item.title}
                      </dt>{' '}
                      <dd className="text-gray-900">
                        <input
                          type="text"
                          name={item.name}
                          className={clsx(inputClasses, inputDark)}
                          defaultValue={item.value}
                        />
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
}

export function ExchangeSection() {
  return (
    <section>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full grid grid-cols-12 items-center py-3">
              <span
                className={clsx(
                  open ? 'text-indigo-600' : 'text-gray-900',
                  'text-sm flex col-span-11 flex-wrap gap-y-3'
                )}
              >
                {orderHeader.exchange?.map(item => (
                  <span className="inline-flex" key={item.name}>
                    <p className="text-gray-500 font-medium mr-1">
                      {item.title} :{' '}
                    </p>
                    <p className="text-gray-900 font-semibold pr-2 mr-2 border-r-2 border-gray-300 dark:text-gray-300">
                      {item.value}
                    </p>
                  </span>
                ))}
              </span>
              <span className="flex items-center col-span-1 justify-end">
                {open ? (
                  <MinusIcon
                    className="block h-4 w-4 text-indigo-400 group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                ) : (
                  <PlusIcon
                    className="block h-4 w-4 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                )}
              </span>
            </Disclosure.Button>

            <Disclosure.Panel
              as="div"
              className="pt-2 border-t border-gray-300 mt-2"
            >
              <dl className="grid text-sm leading-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {orderHeader.exchange.map((item, index) => {
                  return (
                    <div className={clsx('mt-2 sm:mt-0 pb-2')} key={index}>
                      <dt className="text-gray-500 mb-1 font-medium dark:text-gray-300">
                        {item.title}
                      </dt>{' '}
                      <dd className="text-gray-900">
                        <input
                          type="text"
                          name={item.name}
                          className={clsx(inputClasses, inputDark)}
                          defaultValue={item.value}
                        />
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
}
