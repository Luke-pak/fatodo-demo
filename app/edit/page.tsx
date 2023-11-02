'use client';

import OrderHeader from './orderHeader';
import OrderItems from './orderItems';
import { Comment, Activity } from './comment';
import DetailHeader from './detailHeader';
import DetailHeader1 from './detailHeader1';

export default function Detail() {
  return (
    <>
      <main>
        <DetailHeader1 />

        <div className="pt-3 mx-auto max-w-7xl">
          <div className="grid gap-4 grid-cols-1 mx-auto lg:grid-cols-3">
            {/* header */}
            <div className="ring-1 ring-gray-300 rounded-lg col-span-2 p-4 lg:px-8">
              <OrderHeader />
            </div>

            <div className="ring-1 ring-gray-300 rounded-lg p-3">
              {/* New comment form */}
              <Comment />
              {/* Activity feed */}
              <Activity />
            </div>

            <div className="ring-1 ring-gray-300 rounded-lg p-3 w-full col-span-3">
              <OrderItems />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
