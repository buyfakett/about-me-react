import { create } from 'zustand';

const useUrlListStore = create((set) => ({
    urlList: {},
    setUrlList: (newVal) => set(() => ({ urlList: newVal })),
}));

export default useUrlListStore;
