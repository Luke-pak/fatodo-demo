'use client';
import { create } from 'zustand';

const useNotification = create(set => ({
  notification: false,
  setOpen: () => set((state: any) => ({ notification: !state.notification })),
}));

export default useNotification;
