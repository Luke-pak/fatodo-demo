'use client';

import clsx from 'clsx';

const inputClasses =
  'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

const orderHeader = [
  { name: 'orderId', title: '수주번호', value: 'CO2310170002' },
  { name: 'orderDate', title: '수주일', value: '2023-10-17' },
  { name: 'po', title: 'PO NO', value: '119936' },
  { name: 'currency', title: '거래통화', value: 'USD' },
  { name: 'exchange', title: '환율', value: '1150' },
  { name: 'creater', title: '작성자', value: '김혜은' },
  {
    name: 'customer',
    title: '거래처',
    value: 'Signature Floorcoverings Pty LTD',
  },
  { name: 'country', title: '국가', value: 'USA' },
  { name: 'exportType', title: '수출번호', value: '직수출' },
  { name: 'estimatedDeliveryDate', title: '납기예정일', value: '2023-11-07' },
  { name: 'deliveryAddress', title: '배송주소', value: '13 WURUNDJERI DRIVE' },
];

export default function OrderHeader() {
  return (
    <dl className="grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
      {orderHeader.map((item, index) => {
        let pl = index % 2 > 0 ? 'sm:pl-4' : 'sm:pr-4';
        return (
          <div className={clsx('mt-2 sm:mt-0 pb-2', pl)} key={index}>
            <dt className="text-gray-500">{item.title}</dt>{' '}
            <dd className="text-gray-900">
              <input
                type="text"
                name={item.name}
                className={inputClasses}
                defaultValue={item.value}
              />
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
