'use client';

export default function SubTotal({ invoice }: { invoice: any }) {
  return (
    <tfoot>
      <tr>
        <th
          scope="row"
          className="px-0 pt-6 pb-0 font-normal text-gray-700 sm:hidden"
        >
          Subtotal
        </th>
        <td className="pt-6 pb-0 pl-8 pr-0 text-right text-gray-900 tabular-nums sm:hidden">
          {invoice.subTotal}
        </td>

        <th
          scope="row"
          colSpan={6}
          className="hidden px-0 pt-6 pb-0 font-normal text-right text-gray-700 sm:table-cell"
        >
          Subtotal
        </th>
        <td
          className="hidden pt-6 pb-0 pl-8 pr-0 text-right text-gray-900 tabular-nums sm:table-cell"
          colSpan={3}
        >
          {invoice.subTotal}
        </td>
      </tr>

      <tr>
        <th scope="row" className="pt-4 font-normal text-gray-700 sm:hidden">
          Tax
        </th>
        <th
          scope="row"
          colSpan={6}
          className="hidden pt-4 font-normal text-right text-gray-700 sm:table-cell"
        >
          Tax
        </th>
        <td className="pt-4 pb-0 pl-8 pr-0 text-right text-gray-900 tabular-nums">
          {invoice.tax}
        </td>
      </tr>
      <tr>
        <th scope="row" className="pt-4 font-semibold text-gray-900 sm:hidden">
          Total
        </th>
        <th
          scope="row"
          colSpan={6}
          className="hidden pt-4 font-semibold text-right text-gray-900 sm:table-cell"
        >
          Total
        </th>
        <td className="pt-4 pb-0 pl-8 pr-0 font-semibold text-right text-gray-900 tabular-nums">
          {invoice.total}
        </td>
      </tr>
    </tfoot>
  );
}
