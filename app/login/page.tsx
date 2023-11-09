'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import useLogin from '@/store/Login';
import { UserIcon, KeyIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Login() {
  const [isLogin, setLogin] = useLogin((state: any) => [
    state.isLogin,
    state.setLogin,
  ]);
  const [isRegister, setRegister] = useState(false);

  if (isLogin) redirect('/');

  const LoginPage = () => {
    return (
      <div className="bg-black w-full h-full bg-opacity-40 flex justify-center sm:items-center items-start">
        <div className="w-96 h-96 shadow-xl border border-gray-600 rounded-lg bg-gray-300 bg-opacity-10 flex flex-col justify-between items-center backdrop-blur-sm py-8 mt-10 sm:mt-0">
          <div className="text-white text-5xl">Login</div>

          <label className="relative mt-5">
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <UserIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-transparent w-full border border-gray-400 rounded-l-full rounded-r-full py-2 px-5"
              placeholder="Username"
              type="text"
              name="email"
            />
          </label>

          <label className="relative mt-5">
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <KeyIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-transparent w-full border border-gray-400 rounded-l-full rounded-r-full py-2 px-5"
              placeholder="Password"
              type="password"
              name="password"
            />
          </label>

          <div className="mt-5 cursor-pointer">
            <Image
              src="/image/google.svg"
              alt="Google"
              width={40}
              height={40}
            />
          </div>

          <button
            className="rounded-l-full rounded-r-full bg-white text-gray-700 font-semibold py-2 px-5 mt-5 w-64"
            onClick={setLogin}
          >
            Login
          </button>

          <div className="flex mt-3">
            <p className="text-gray-400">{"Don't have and account?"}</p>
            <span
              className="ml-1 cursor-pointer"
              onClick={() => setRegister(true)}
            >
              Register
            </span>
          </div>
        </div>
      </div>
    );
  };

  const RegisterPage = () => {
    return (
      <div className="bg-black w-full h-full bg-opacity-40 flex justify-center sm:items-center items-start">
        <div className="w-96 h-96 shadow-xl border border-gray-600 rounded-lg bg-gray-300 bg-opacity-10 flex flex-col justify-between items-center backdrop-blur-sm py-8 mt-10 sm:mt-0">
          <div className="text-white text-3xl">Register</div>

          <label className="relative mt-5">
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <UserIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-transparent w-full border border-gray-400 rounded-l-full rounded-r-full py-2 px-5"
              placeholder="Username"
              type="text"
              name="email"
            />
          </label>

          <label className="relative mt-5">
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <KeyIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-transparent w-full border border-gray-400 rounded-l-full rounded-r-full py-2 px-5"
              placeholder="Password"
              type="password"
              name="password"
            />
          </label>

          <label className="relative mt-5">
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <KeyIcon className="w-5 h-5 text-slate-400" />
            </span>
            <input
              className="placeholder:text-slate-400 block bg-transparent w-full border border-gray-400 rounded-l-full rounded-r-full py-2 px-5"
              placeholder="Re Password"
              type="password"
              name="password"
            />
          </label>

          <div className="flex gap-3">
            <button
              className="rounded-l-full rounded-r-full bg-transparent border-2 border-white text-white font-semibold py-2 px-5 mt-5 w-32"
              onClick={() => setRegister(false)}
            >
              Cancel
            </button>
            <button className="rounded-l-full rounded-r-full bg-white text-gray-700 font-semibold py-2 px-5 mt-5 w-32">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{ backgroundImage: `url("/image/login-bg.jpg")` }}
      className="h-screen bg-cover bg-center text-white"
    >
      {isRegister ? <RegisterPage /> : <LoginPage />}
    </div>
  );
}
