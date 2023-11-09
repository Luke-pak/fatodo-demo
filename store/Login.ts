'use client';
import { create } from 'zustand';

const useLogin = create(set => ({
  isLogin: false,
  setLogin: () =>
    set(() => {
      const today = new Date();
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

      localStorage.setItem('login', date);
      return { isLogin: true };
    }),
  setLogout: () =>
    set(() => {
      localStorage.setItem('login', '');
      return { isLogin: false };
    }),
}));

export default useLogin;
