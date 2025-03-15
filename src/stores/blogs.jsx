import { create } from 'zustand';

const useBlogsStore = create((set) => ({
    blogsData: [],
    setBlogsData: (newVal) => set(() => ({ blogsData: newVal })),
}));

export default useBlogsStore;
