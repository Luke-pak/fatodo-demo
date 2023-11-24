'use client';

import OrderHeader from './orderHeader';
import OrderItems from './orderItems';
import { Comment, Activity } from './comment';
import DetailHeader1 from './detailHeader1';
import Tabs from './tabs';
import SideHistory from './SideHistory';
import { Tab } from '@headlessui/react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});
import 'react-quill/dist/quill.snow.css';
import {
  CustomerSection,
  ExchangeSection,
  HeaderSection,
} from './inputSection';
import OrderItems1 from './orderItems1';
import OrderHeader1 from './orderHeader1';

export default function Detail() {
  return (
    <>
      <main className="w-full">
        <DetailHeader1 />

        <div className="pt-3">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {/* header */}
            <div className="ring-1 ring-gray-300 rounded-lg col-span-1 md:col-span-3 p-2 px-4 dark:ring-0 dark:bg-gray-800">
              {/* <HeaderSection />
              <div className="my-2 border-t border-gray-300" />
              <CustomerSection />
              <div className="my-2 border-t border-gray-300" />
              <ExchangeSection /> */}

              <OrderHeader1 />
            </div>

            {/* <div className="hidden md:block ring-1 ring-gray-300 rounded-lg col-span-1 p-3">
              <Comment />
              <Activity />
            </div> */}

            <div className="ring-1 ring-gray-300 rounded-lg px-3 col-span-1 md:col-span-3 pb-3 dark:ring-0 dark:bg-gray-800">
              <Tab.Group>
                <Tabs />
                <div className="mt-4">
                  <Tab.Panels>
                    <Tab.Panel>
                      <OrderItems />
                    </Tab.Panel>
                    <Tab.Panel>
                      <OrderItems1 />
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="pb-5">
                        <ReactQuill />
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </div>
        </div>
      </main>

      <SideHistory />
    </>
  );
}
