'use client';
import { create } from 'zustand';

const useOpenMenu = create(set => ({
  isOpenMenu: false,
  setOpenMenu: () => set(() => ({ isOpenMenu: true })),
  setCloseMenu: () => set(() => ({ isOpenMenu: false })),
}));

export default useOpenMenu;
