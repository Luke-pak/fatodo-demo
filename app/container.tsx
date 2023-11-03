'use client';

import Header from '@/components/Header';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="relative pt-12 isolate">
        <div className="px-6 py-10 mx-auto max-w-7xl sm:py-10 lg:flex lg:items-center lg:justify-center lg:gap-x-10 lg:px-8 lg:py-10">
          {children}
        </div>
      </div>
    </>
  );
}
