import { create } from 'zustand';

const usePicturesStore = create((set) => ({
    error: null,
    pictureList: { urls: [], count: 0 },
    setPictureList: (newVal) => set(() => ({ pictureList: newVal })),
    setPictureError: (newVal) => set(() => ({ error: newVal })),
}));

export default usePicturesStore;
