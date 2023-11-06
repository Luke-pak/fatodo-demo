'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import WorkOrderHeader from './workOrderHeader';
import Image from 'next/image';
import { ClockIcon, WrenchIcon, CubeIcon } from '@heroicons/react/24/outline';
import WorkTime from './workTime';
import { useWorkLogModal, useWorkTimeModal } from '@/store/Modal';
import WorkLog from './workLog';

const product = {
  name: 'LVT 2T AW9165',
  lotId: '23-10-25-01',
  spec: '5T(0.5) X 9" X 60"',
  pattern: 'AW9868',
  status: 'RUNNING',
};

const ManufType = [
  { key: 'GOOD', title: '양품', quantity: 56 },
  { key: 'DEFECT', title: '불량', quantity: 5 },
];

const DefectTypes = [
  '이물',
  '기포',
  '잡물',
  '기계오류',
  '오염',
  '재단불량',
  '찍힘',
];

export default function WorkOrderDetail() {
  const [selectedType, setSelectedType] = useState('');
  const [defectType, setDefectType] = useState('');

  const [setWorkTimeOpen] = useWorkTimeModal((state: any) => [state.setOpen]);
  const [setWorkLogOpen] = useWorkLogModal((state: any) => [state.setOpen]);

  return (
    <div className="pt-3 mx-auto max-w-4xl w-full">
      <div className="mx-auto px-4">
        <WorkOrderHeader />

        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8">
          <div className="col-span-1 row-start-1 md:col-start-6 md:col-span-7">
            <div className="w-full flex justify-between">
              {/* 제품정보 */}
              <div className="flex flex-col">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h1>
                <p className="text-gray-500">{product.spec}</p>
                <p className="text-gray-500">{product.pattern}</p>
              </div>

              {/* 작업지시정보 */}
              <div className="flex flex-col">
                <p className="text-xl font-medium text-gray-500 text-right">
                  {product.lotId}
                </p>
                <div className="text-right">
                  <span className="text-gray-900 text-3xl">120</span>
                  <span className="text-gray-500 text-xl ml-2">EA</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-5">
                <RadioGroup value={selectedType} onChange={setSelectedType}>
                  <div className="grid grid-cols-2 gap-3">
                    {ManufType.map(type => (
                      <RadioGroup.Option
                        key={type.key}
                        value={type.key}
                        as="div"
                        className={({ active }) =>
                          clsx(
                            active ? 'ring-2 ring-indigo-500' : '',
                            'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none text-center -z-10'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label
                              as="p"
                              className="text-base font-medium text-gray-900"
                            >
                              {type.title}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="p"
                              className="mt-1 text-sm text-gray-500"
                            >
                              수량 : {type.quantity}
                            </RadioGroup.Description>
                            <div
                              className={clsx(
                                active ? 'border' : 'border-2',
                                checked
                                  ? 'border-indigo-500'
                                  : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-lg -z-10'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {selectedType === 'DEFECT' && (
                <div className="mt-5">
                  <RadioGroup value={defectType} onChange={setDefectType}>
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700 mb-2">
                      불량유형
                    </RadioGroup.Label>
                    <div className="grid grid-cols-5 gap-3">
                      {DefectTypes.map(defect => (
                        <RadioGroup.Option
                          key={defect}
                          value={defect}
                          className={({ active, checked }) =>
                            clsx(
                              'cursor-pointer focus:outline-none',
                              checked
                                ? 'border-transparent bg-red-500 text-white hover:bg-red-700'
                                : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                              'flex items-center justify-center rounded-md border py-3 px-1 text-sm font-medium sm:flex-1'
                            )
                          }
                        >
                          <RadioGroup.Label as="span">
                            {defect}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {selectedType === 'GOOD' && (
                <>
                  <div className="mt-5">
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      수량
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    생산등록
                  </button>
                </>
              )}

              {selectedType === 'DEFECT' && defectType && (
                <>
                  <div className="mt-5">
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      수량
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-center"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    생산등록
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="hidden md:block md:row-start-2 md:col-span-12 md:mt-5">
            <div className="flex justify-between w-full gap-3">
              <div
                className="ring-1 w-1/6 ring-gray-400 rounded-lg p-3 font-semibold text-gray-500 flex justify-center items-center cursor-pointer hover:ring-transparent hover:text-white hover:bg-indigo-500"
                onClick={setWorkTimeOpen}
              >
                <ClockIcon className="w-6 h-6 mr-1" />
                <span>작업시간</span>
              </div>

              <div
                className="ring-1 w-1/6 ring-gray-400 rounded-lg p-3 font-semibold text-gray-500 flex justify-center items-center cursor-pointer hover:ring-transparent hover:text-white hover:bg-indigo-500"
                onClick={setWorkLogOpen}
              >
                <CubeIcon className="w-6 h-6 mr-1" />
                <span>생산현황</span>
              </div>

              <div className="ring-1 w-1/6 ring-gray-400 rounded-lg p-3 font-semibold text-gray-500 flex justify-center items-center cursor-pointer hover:ring-transparent hover:text-white hover:bg-indigo-500">
                <WrenchIcon className="w-6 h-6 mr-1" />
                <span>비가동</span>
              </div>
            </div>
          </div>

          {/* Image gallery */}
          <div className="col-span-1 row-start-3 mt-5 md:mt-0 md:col-span-5 md:col-start-1 md:row-start-1 flex justify-center">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg"
              height={400}
              width={400}
              style={{ objectFit: 'contain' }}
              alt=""
            />
          </div>
        </div>
      </div>

      <WorkTime />
      <WorkLog />
    </div>
  );
}
