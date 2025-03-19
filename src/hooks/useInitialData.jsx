import { useEffect } from 'react';
import { apiList } from '@/config';
import useWakatimeStore from '@/stores/wakatime';
import useBlogsStore from '@/stores/blogs';
import usePicturesStore from '@/stores/pictures';

const useInitialData = () => {
    const setWakatimeData = useWakatimeStore((state) => state.setWakatimeData);
    const setBlogs = useBlogsStore((state) => state.setBlogsData);
    const setPictureList = usePicturesStore((state) => state.setPictureList);
    const setPictureError = usePicturesStore((state) => state.setPictureError);

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

        const fetchPictures = async () => {
            try {
                const response = await fetch(apiList.pictures);
                const data = await response.json();
                setPictureList(data);
            } catch (error) {
                console.error('获取图片列表失败:', error);
                setPictureError('获取图片列表失败');
            }
        };

        getWakatimeData();
        getBlogs();
        fetchPictures();
    }, []);
};

export default useInitialData;
