'use client';

import { Stats2 } from '../find/Stats';
import Table from '../find/Table';
import { Search2, Search3 } from '../find/Search';
import Sidebar from '../find/Sidebar';
import SideSearch from './SideSearch';
import useSideSearch from '@/store/SideSearch';
import SearchDate from './SearchDate';

export default function Find() {
  const [open, setOpen] = useSideSearch((state: any) => [
    state.isSearchOpen,
    state.setSearchOpen,
  ]);

  return (
    <div className="grid flex-wrap w-full grid-cols-12 gap-x-4 gap-y-3">
      <Search3 />
      {/* <Stats2 /> */}
      <Table />
      <Sidebar />
      <SideSearch />

      <SearchDate />
    </div>
  );
}
