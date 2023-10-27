'use client';
import { create } from 'zustand';

const useSidebar = create(set => ({
  isOpen: false,
  setOpen: () => set(() => ({ isOpen: true })),
  setClose: () => set(() => ({ isOpen: false })),
}));

export default useSidebar;
