import { create } from 'zustand';
import { waka_timeDefaultData } from '@/default_data/waka_time';

const useWakatimeStore = create((set) => ({
    wakatimeData: waka_timeDefaultData,
    setWakatimeData: (newVal) => set(() => ({ wakatimeData: newVal })),
}));

export default useWakatimeStore;
