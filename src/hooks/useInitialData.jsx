import { useEffect } from 'react';
import { apiList } from '@/config';
import useWakatimeStore from '@/stores/wakatime';
import useBlogsStore from '@/stores/blogs';
import usePicturesStore from '@/stores/pictures';
import useProjectDataStore from "@/stores/project_list";
import useUrlListStore from "@/stores/url_list";
import useSoftwareToolsStore from "@/stores/software_tools";
import useDevicesStore from "@/stores/devices";

const useInitialData = () => {
    const setWakatimeData = useWakatimeStore((state) => state.setWakatimeData);
    const setBlogs = useBlogsStore((state) => state.setBlogsData);
    const setProjectData = useProjectDataStore((state) => state.setProjectData);
    const setUrlList = useUrlListStore((state) => state.setUrlList);
    const setSoftwareTools = useSoftwareToolsStore((state) => state.setSoftwareTools);
    const setDevices = useDevicesStore((state) => state.setDevices);
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

        const getProjectData = async () => {
            const response = await fetch(apiList.projectData);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProjectData(data);
        };

        const getUrlList = async () => {
            const response = await fetch(apiList.urlList);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUrlList(data);
        };

        const getSoftwareTools = async () => {
            const response = await fetch(apiList.softwareTools);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSoftwareTools(data);
        };

        const getDevice = async () => {
            const response = await fetch(apiList.device);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDevices(data);
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
        // getProjectData();
        // getUrlList();
        // getSoftwareTools();
        // getDevice();
        fetchPictures();
    }, []);
};

export default useInitialData;
