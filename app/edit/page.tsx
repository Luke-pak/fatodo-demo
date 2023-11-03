'use client';

import OrderHeader from './orderHeader';
import OrderItems from './orderItems';
import { Comment, Activity } from './comment';
import DetailHeader1 from './detailHeader1';
import Tabs from './tabs';
import SideHistory from './SideHistory';

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
              <Tabs />
              <div className="mt-4">
                <OrderItems />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SideHistory />
    </>
  );
}
