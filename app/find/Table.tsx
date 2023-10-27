'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { products } from './data';
import Pagination from './Pagenation';
import useSidebar from '@/store/ProductSidebar';
import { Button } from '@/components/Button';

const thClass =
  'sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter';

export default function Table() {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [setOpen] = useSidebar((state: any) => [state.setOpen]);

  return (
    <div className="col-span-full border border-gray-200 rounded-md p-0">
      <table className="min-w-full border-separate border-spacing-0">
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className={clsx(thClass, 'py-3.5 pl-4 pr-3 sm:pl-6 lg:pl-8')}
            >
              품번
            </th>
            <th scope="col" className={clsx(thClass, 'px-3 py-3.5')}>
              품명
            </th>
            <th
              scope="col"
              className={clsx(thClass, 'hidden px-3 py-3.5 sm:table-cell')}
            >
              단위
            </th>
            <th
              scope="col"
              className={clsx(thClass, 'hidden px-3 py-3.5 sm:table-cell')}
            >
              비고
            </th>
            <th
              scope="col"
              className={clsx(thClass, 'py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8')}
            >
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {products?.results.map((product, index) => (
            <tr key={index}>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                )}
              >
                {product.internalName}
              </td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                )}
              >
                {product.productName}
              </td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                )}
              >
                {product.quantityUomId}
              </td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                )}
              ></td>
              <td
                className={clsx(
                  index !== products?.results.length - 1 &&
                    'border-b border-gray-200',
                  'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                )}
              >
                <Button
                  onClick={() => {
                    setOpen(product);
                  }}
                  variant="outline"
                  size="sm"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Edit Side
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={1}
        total={50}
        limit={10}
        setPage={setPage}
        setLimit={setLimit}
      />
    </div>
  );
}
