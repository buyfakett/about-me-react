import { useEffect } from 'react';
import { apiList } from '@/config';
import useWakatimeStore from '@/stores/wakatime';
import useBlogsStore from '@/stores/blogs';

const useInitialData = () => {
    const setWakatimeData = useWakatimeStore((state) => state.setWakatimeData);
    const setBlogs = useBlogsStore((state) => state.setBlogsData);

    useEffect(() => {
        const getWakatimeData = async () => {
            const response = await fetch(apiList.wakaTime);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setWakatimeData(result);
        };

        const getBlogs = async () => {
            const response = await fetch(apiList.blog);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBlogs(data);
        };

        getWakatimeData();
        getBlogs();
    }, []);
};

export default useInitialData;
