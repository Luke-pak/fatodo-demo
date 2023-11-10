'use client';

import { Stats2 } from '../find/Stats';
import Table from '../find/Table';
import { Search2 } from '../find/Search';
import Sidebar from '../find/Sidebar';
import SideSearch from './SideSearch';
import useSideSearch from '@/store/SideSearch';
import { ReactEventHandler, useCallback, useEffect } from 'react';

export default function Find() {
  const [open, setOpen] = useSideSearch((state: any) => [
    state.isSearchOpen,
    state.setSearchOpen,
  ]);

  return (
    <div className="grid flex-wrap w-full grid-cols-12 gap-4">
      <Search2 />
      <Stats2 />
      <Table />
      <Sidebar />
      <SideSearch />
    </div>
  );
}
