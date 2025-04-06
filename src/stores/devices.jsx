import { create } from 'zustand';

const useDevicesStore = create((set) => ({
    devices: {},
    setDevices: (newVal) => set(() => ({ devices: newVal })),
}));

export default useDevicesStore;
