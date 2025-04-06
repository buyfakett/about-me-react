import { create } from 'zustand';

const useProjectDataStore = create((set) => ({
    projectData: [],
    setProjectData: (newVal) => set(() => ({ projectData: newVal })),
}));

export default useProjectDataStore;
