import { create } from 'zustand';

const useSoftwareToolsStore = create((set) => ({
    softwareTools: {},
    setSoftwareTools: (newVal) => set(() => ({ softwareTools: newVal })),
}));

export default useSoftwareToolsStore;
