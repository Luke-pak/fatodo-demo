'use client';

import useSidebar from '@/store/Sidebar';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import useSideSearch from '@/store/SideSearch';

export default function SideSearch() {
  const [open, setClose] = useSideSearch((state: any) => [
    state.isSearchOpen,
    state.setSearchClose,
  ]);

  return <></>;
}
