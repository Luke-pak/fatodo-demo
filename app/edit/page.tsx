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

export default function Detail() {
  return (
    <>
      <main>
        <DetailHeader1 />

        <div className="pt-3 mx-auto max-w-7xl">
          <div className="grid gap-4 grid-cols-1 mx-auto md:grid-cols-3">
            {/* header */}
            <div className="ring-1 ring-gray-300 rounded-lg col-span-1 md:col-span-2 p-4 lg:px-8">
              <OrderHeader />
            </div>

            <div className="hidden md:block ring-1 ring-gray-300 rounded-lg col-span-1 p-3">
              {/* New comment form */}
              <Comment />
              {/* Activity feed */}
              <Activity />
            </div>

            <div className="ring-1 ring-gray-300 rounded-lg px-3 col-span-1 md:col-span-3">
              <Tab.Group>
                <Tabs />
                <div className="mt-4">
                  <Tab.Panels>
                    <Tab.Panel>
                      <OrderItems />
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="text-lg text-gray-500 font-semibold pb-5 px-5">
                        출하
                      </div>
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
