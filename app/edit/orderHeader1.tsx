'use client';

import clsx from 'clsx';

const inputClasses =
  'block w-full -ml-1 py-1 px-2 text-gray-500 sm:text-sm rounded-lg focus:shadow-md focus:shadow-indigo-300 focus:outline-none focus:cursor-text focus:hover:bg-white hover:bg-gray-100 hover:cursor-pointer';
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

export default function OrderHeader1() {
  return (
    <>
      <div className="text-md text-gray-900 font-semibold border-b border-gray-300 mb-2 pb-1">
        수주정보
      </div>
      <dl className="grid text-sm leading-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3">
        {orderHeader.header.map((item, index) => {
          return (
            <div className={clsx('mt-2 sm:mt-0 pb-0 sm:pb-2')} key={index}>
              <dt className="font-semibold text-gray-900 mb-1 dark:text-gray-300">
                {item.title}
              </dt>{' '}
              <dd>
                <input
                  type="text"
                  name={item.name}
                  className={clsx(
                    inputClasses,
                    inputDark,
                    'focus:text-gray-800 focus:font-semibold'
                  )}
                  defaultValue={item.value}
                />
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="text-md text-gray-900 font-semibold border-b border-gray-300 mb-2 pb-1 mt-5">
        거래처
      </div>
      <dl className="grid text-sm leading-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3">
        {orderHeader.customer.map((item, index) => {
          return (
            <div className={clsx('mt-2 sm:mt-0 pb-0 sm:pb-2')} key={index}>
              <dt className="font-semibold text-gray-900 mb-1 dark:text-gray-300">
                {item.title}
              </dt>{' '}
              <dd>
                <input
                  type="text"
                  name={item.name}
                  className={clsx(
                    inputClasses,
                    inputDark,
                    'focus:text-gray-800 focus:font-semibold'
                  )}
                  defaultValue={item.value}
                />
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="text-md text-gray-900 font-semibold border-b border-gray-300 mb-2 pb-1 mt-5">
        환율
      </div>
      <dl className="grid text-sm leading-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3">
        {orderHeader.exchange.map((item, index) => {
          return (
            <div className={clsx('mt-2 sm:mt-0 pb-0 sm:pb-2')} key={index}>
              <dt className="font-semibold text-gray-900 mb-1 dark:text-gray-300">
                {item.title}
              </dt>{' '}
              <dd>
                <input
                  type="text"
                  name={item.name}
                  className={clsx(
                    inputClasses,
                    inputDark,
                    'focus:text-gray-800 focus:font-semibold'
                  )}
                  defaultValue={item.value}
                />
              </dd>
            </div>
          );
        })}
      </dl>
    </>
  );
}
