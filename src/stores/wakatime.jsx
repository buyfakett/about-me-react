import { create } from 'zustand';
import { waka_timeDefaultData } from '@/default_data/waka_time';

const useWakatimeStore = create((set) => ({
    wakatimeData: waka_timeDefaultData,
    setwakatimeData: (newVal) => set(() => ({ wakatimeData: newVal })),
}));

export default useWakatimeStore;
