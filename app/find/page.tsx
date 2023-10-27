'use client';

import { Stats1 } from './Stats';
import Table from './Table';
import { Search1 } from './Search';
import Sidebar from './Sidebar';

export default function Find() {
  return (
    <div className="grid flex-wrap w-full grid-cols-12 gap-4">
      <Search1 />
      <Stats1 />
      <Table />
      <Sidebar />
    </div>
  );
}
