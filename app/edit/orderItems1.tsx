'use client';

import Image from 'next/image';
import SubTotal from './subTotal';

const items = [
  {
    orderItemSeqId: '00001',
    productId: 'PC2207052876',
    productName: 'LLT 4.5T AW1826',
    internalName: '1AW18260K-L4550SKDBSGN',
    unitPrice: 17.822163,
    quantity: 1845,
    embossing: '세미와일드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1826',
    colorName: 'Sandpaper Oak',
  },
  {
    orderItemSeqId: '00002',
    productId: 'PC2207052414',
    productName: 'LLT 4.5T AW2643',
    internalName: '1AW26430K-L4550MKDBSGN',
    unitPrice: 17.822154,
    quantity: 585,
    embossing: '세미와일드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW2643',
    colorName: 'Butter Oak',
  },
  {
    orderItemSeqId: '00003',
    productId: 'PC2207052867',
    productName: 'LLT 4.5T AW1825',
    internalName: '1AW18250K-L4550MLDBSGN',
    unitPrice: 17.822156,
    quantity: 450,
    embossing: '와일드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1825',
    colorName: 'Cromwell Oak',
  },
  {
    orderItemSeqId: '00004',
    productId: 'PC2302090001',
    productName: 'LLT 4.5T AW1534',
    internalName: '1AW15340K-L4550SIDBSN0',
    unitPrice: 17.822178,
    quantity: 225,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1534',
    colorName: 'Braga Blackbutt',
  },
  {
    orderItemSeqId: '00005',
    productId: 'PC2302090002',
    productName: 'LLT 4.5T AW1905',
    internalName: '1AW19050K-L4550SIDBSNG',
    unitPrice: 17.822178,
    quantity: 225,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1905',
    colorName: 'Orient Spotted Gum',
  },
  {
    orderItemSeqId: '00006',
    productId: 'PC2207052415',
    productName: 'LLT 4.5T AW2644',
    internalName: '1AW26440K-L4550MKDBSGN',
    unitPrice: 17.822178,
    quantity: 225,
    embossing: '세미와일드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW2644',
    colorName: 'Almond Oak',
  },
  {
    orderItemSeqId: '00007',
    productId: 'PC2303290008',
    productName: 'LLT 4.5T AW1899',
    internalName: '1AW18990K-L4550SIDBSN0',
    unitPrice: 17.822159,
    quantity: 315,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1899',
    colorName: 'Darlington Spotted Gum',
  },
  {
    orderItemSeqId: '00008',
    productId: 'PC2303300014',
    productName: 'LLT 4.5T AW1519',
    internalName: '1AW15190K-L4550SIDBSN0',
    unitPrice: 17.822159,
    quantity: 315,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1519',
    colorName: 'Kalbar Oak',
  },
  {
    orderItemSeqId: '00009',
    productId: 'PC2303300015',
    productName: 'LLT 4.5T AW1520',
    internalName: '1AW15200K-L4550SIDBSN0',
    unitPrice: 17.822159,
    quantity: 315,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1520',
    colorName: 'Lamington Oak',
  },
  {
    orderItemSeqId: '00010',
    productId: 'PC2303300010',
    productName: 'LLT 4.5T AW1900',
    internalName: '1AW19000K-L4550SIDBSN0',
    unitPrice: 17.822148,
    quantity: 270,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1900',
    colorName: 'Karoomba Oak',
  },
  {
    orderItemSeqId: '00011',
    productId: 'PC2303300012',
    productName: 'LLT 4.5T AW1517',
    internalName: '1AW15170K-L4550SIDBSN0',
    unitPrice: 17.822148,
    quantity: 270,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1517',
    colorName: 'Mathieson Oak',
  },
  {
    orderItemSeqId: '00012',
    productId: 'PC2303300013',
    productName: 'LLT 4.5T AW1518',
    internalName: '1AW15180K-L4550SIDBSN0',
    unitPrice: 17.822148,
    quantity: 270,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1518',
    colorName: 'Elabana Oak',
  },
  {
    orderItemSeqId: '00013',
    productId: 'PC2303290005',
    productName: 'LLT 4.5T AW1869',
    internalName: '1AW18690K-L4550SIDBSNS',
    unitPrice: 17.822178,
    quantity: 225,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1869',
    colorName: 'Alford Blackbutt',
  },
  {
    orderItemSeqId: '00014',
    productId: 'PC2303290006',
    productName: 'LLT 4.5T AW1896',
    internalName: '1AW18960K-L4550SIDBSN0',
    unitPrice: 17.822178,
    quantity: 225,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1896',
    colorName: 'Boonah Blackbutt',
  },
  {
    orderItemSeqId: '00015',
    productId: 'PC2303290007',
    productName: 'LLT 4.5T AW1898',
    internalName: '1AW18980K-L4550SIDBSN0',
    unitPrice: 17.822178,
    quantity: 225,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1898',
    colorName: 'Harrisville Spotted Gum',
  },
  {
    orderItemSeqId: '00016',
    productId: 'PC2303300011',
    productName: 'LLT 4.5T AW1516',
    internalName: '1AW15160K-L4550SIDBSN0',
    unitPrice: 17.822178,
    quantity: 225,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1516',
    colorName: 'Tamborine Oak',
  },
  {
    orderItemSeqId: '00017',
    productId: 'PC2207052879',
    productName: 'LLT 4.5T AW1896',
    internalName: '1AW18960O-L4555SIDBSN0',
    unitPrice: 21.842876,
    quantity: 765,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1896',
    colorName: 'QLD Blackbutt',
  },
  {
    orderItemSeqId: '00018',
    productId: 'PC2207052877',
    productName: 'LLT 4.5T AW1869',
    internalName: '1AW18690O-L4555SIDBSNP',
    unitPrice: 21.842885,
    quantity: 714,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1869',
    colorName: 'Panorama Avoca Blackbutt',
  },
  {
    orderItemSeqId: '00019',
    productId: 'PC2207052763',
    productName: 'LLT 4.5T AW1866',
    internalName: '1AW18660O-L4555SIDBSNP',
    unitPrice: 21.842885,
    quantity: 714,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1866',
    colorName: 'Panorama Burgundy Blackbutt',
  },
  {
    orderItemSeqId: '00020',
    productId: 'PC2207052771',
    productName: 'LLT 4.5T AW1884',
    internalName: '1AW18840O-L4555SIDBSNP',
    unitPrice: 21.842876,
    quantity: 306,
    embossing: 'RT우드',
    uv: 'G-15',
    gf: 'O',
    pattern: 'AW1884',
    colorName: 'Panorama Darebin',
  },
];

const invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items,
};

const images = [
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
];

export default function OrderItems1() {
  const randomNumber = () => {
    return parseInt(Math.floor(Math.random() * 5) + '');
  };

  return (
    <div className="overflow-x-scroll ">
      <table className="items-center bg-transparent w-full">
        <thead className="sticky z-10">
          <tr>
            <th
              scope="col"
              className="sticky left-0 px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              품명
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              엠보
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              UV
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              GF
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              패턴
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              COLOR
            </th>

            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              단가
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              수량
            </th>
            <th
              scope="col"
              className="hidden sm:table-cell px-6 bg-[#f8fafc] text-[#64748b] align-middle border border-solid border-[#f1f5f9] py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              금액
            </th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
          {invoice.items.map(item => (
            <tr key={item.orderItemSeqId} className="">
              <td className="sticky left-0 bg-white border-t-0 pl-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-left">
                <div className="flex py-2 pr-3 border-r border-[#f1f5f9] items-center">
                  <div className="w-16 p-1">
                    <Image
                      className="rounded-md"
                      alt=""
                      src={images[randomNumber()]}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <div className="text-[#334155]">{item.productName}</div>
                    <div className="text-[#334155]">{item.internalName}</div>
                  </div>
                </div>
              </td>

              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {item.embossing}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {item.uv}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {item.gf}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {item.pattern}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {item.colorName}
              </td>

              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                ${item.unitPrice.toFixed(2)}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                {item.quantity}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
                ${(item.quantity * item.unitPrice).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
