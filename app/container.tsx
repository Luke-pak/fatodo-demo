'use client';

import Header from '@/components/Header';
import Notification from '@/components/Notification';
import { useEffect } from 'react';
import useLogin from '@/store/Login';
import { redirect, usePathname } from 'next/navigation';
import Header2 from '@/components/Header2';
import Header1 from '@/components/Header1';
import SizeChecker from '@/components/SizeChecker';

export default function Container({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [login, setLogin, setLogout] = useLogin((state: any) => [
    state.isLogin,
    state.setLogin,
    state.setLogout,
  ]);

  useEffect(() => {
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    if (localStorage.getItem('login') === date) {
      setLogin();
    } else {
      setLogout();
      if (pathname !== '/login') redirect('/login');
    }
  }, []);

  if (login) {
    return (
      <>
        {/* <Header /> */}
        <Header1 />
        <div className="relative pt-12 isolate dark:bg-slate-900">
          <div className="px-6 py-6 mx-auto md:max-w-7xl xl:max-w-[1400px] sm:py-10 lg:flex lg:items-center lg:justify-center lg:gap-x-10 lg:px-8 lg:py-10">
            {children}
          </div>
        </div>
      </>
    );
  }

  if (pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  min-h-[73vh] flex flex-col justify-center">
        <div className="flex justify-center mx-auto max-w-3xl">
          <h1 className="font-bold text-5xl sm:text-7xl lg:text-9xl">
            FACT⏰DO
          </h1>
        </div>
      </div>
    </>
  );
}
