import { create } from 'zustand';

const useLanguageStore = create((set) => ({
    isChinese: false,
    setLanguageData: (newVal) => set(() => ({ isChinese: newVal })),
}));

export default useLanguageStore;
