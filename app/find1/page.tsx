'use client';

import { Stats2 } from '../find/Stats';
import Table from '../find/Table';
import { Search2 } from '../find/Search';
import Sidebar from '../find/Sidebar';

export default function Find() {
  return (
    <div className="grid flex-wrap w-full grid-cols-12 gap-4">
      <Search2 />
      <Stats2 />
      <Table />
      <Sidebar />
    </div>
  );
}
