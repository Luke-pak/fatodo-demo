'use client';
import { create } from 'zustand';

const useSideSearch = create(set => ({
  isSearchOpen: false,
  setSearchOpen: () => set(() => ({ isSearchOpen: true })),
  setSearchClose: () => set(() => ({ isSearchOpen: false })),
}));

export default useSideSearch;
