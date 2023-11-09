'use client';
import { create } from 'zustand';

const useDark = create(set => ({
  isDark: false,
  setDark: () =>
    set((state: any) => {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      return { isDark: !state.isDark };
    }),
  setToggle: () =>
    set((state: any) => {
      if (!state.isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }

      return { isDark: !state.isDark };
    }),
}));

export default useDark;
