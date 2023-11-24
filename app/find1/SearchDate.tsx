'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useWorkTimeModal } from '@/store/Modal';

export default function SearchDate() {
  const [open, setClose] = useWorkTimeModal((state: any) => [
    state.isOpen,
    state.setClose,
  ]);

  return (
    <Transition.Root show={open}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={setClose}
        onClose={setClose}
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <Dialog.Title
                  as="h3"
                  className="text-base font-semibold text-white w-96 p-4 px-5 bg-indigo-600"
                >
                  기간선택
                </Dialog.Title>

                <div className="p-6 pt-3">
                  <div>
                    <div>
                      <label
                        htmlFor="actualStartDate"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        시작
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="actualStartDate"
                          id="actualStartDate"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="actualCompletionDate"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        종료
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="actualCompletionDate"
                          id="actualCompletionDate"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                      onClick={setClose}
                    >
                      확인
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={setClose}
                    >
                      취소
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
