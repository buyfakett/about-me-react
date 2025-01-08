import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { apiList, pageVariants } from '../../config';
import { Button, Empty, Image, Spin } from '@douyinfe/semi-ui';
import {
    IllustrationConstruction,
    IllustrationConstructionDark,
} from '@douyinfe/semi-illustrations';
import { IoIosArrowBack } from 'react-icons/io';

const Pictures = () => {
    const [loadedPhotos, setLoadedPhotos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [pictureList, setPictureList] = useState({ urls: [], count: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const PHOTOS_PER_LOAD = 10;

    // 获取图片列表
    useEffect(() => {
        const fetchPictures = async () => {
            try {
                setLoading(true);
                const response = await fetch(apiList.pictures);
                const data = await response.json();
                setPictureList(data);
            } catch (error) {
                console.error('获取图片列表失败:', error);
                setError('获取图片列表失败，请稍后重试');
            } finally {
                setLoading(false);
            }
        };

        fetchPictures();
    }, []);

    // 批量加载图像的功能
    useEffect(() => {
        const loadImages = async () => {
            const nextBatch = pictureList.urls.slice(
                currentIndex,
                currentIndex + PHOTOS_PER_LOAD,
            );
            for (const photoData of nextBatch) {
                const img = new window.Image();
                img.src = photoData.url;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
                setLoadedPhotos((prevPhotos) => {
                    if (!prevPhotos.some(photo => photo.url === photoData.url)) {
                        return [...prevPhotos, photoData];
                    }
                    return prevPhotos;
                });
            }
        };

        loadImages();
    }, [currentIndex, pictureList.urls]);

    // 无限滚动触发逻辑
    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;
            const footerHeight =
                document.querySelector('footer')?.offsetHeight || 0;

            if (scrollTop + clientHeight >= scrollHeight - footerHeight - 100) {
                setCurrentIndex((prevIndex) => {
                    const newIndex = prevIndex + PHOTOS_PER_LOAD;
                    if (newIndex < pictureList.count) {
                        return newIndex;
                    }
                    return prevIndex;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pictureList]);

    return (
        <motion.div
            className="w-[80%] mx-auto min-h-screen dark:bg-gray-900 text-white flex flex-col items-center p-4 mt-3"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}>
            <div className="w-full flex justify-start text-white mb-10">
                <Button
                    theme="outline"
                    type="tertiary"
                    onClick={() => navigate('/')}>
                    <IoIosArrowBack />
                    返回首页
                </Button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-[200px]">
                    <Spin size="large" />
                </div>
            ) : error ? (
                <Empty
                    image={
                        <IllustrationConstruction
                            style={{ width: 150, height: 150 }}
                        />
                    }
                    darkModeImage={
                        <IllustrationConstructionDark
                            style={{ width: 150, height: 150 }}
                        />
                    }
                    title={'未获取到图片'}
                    description="获取不到图片，请重试"
                />
            ) : !pictureList?.urls?.length ? (
                <Empty
                    image={
                        <IllustrationConstruction
                            style={{ width: 150, height: 150 }}
                        />
                    }
                    darkModeImage={
                        <IllustrationConstructionDark
                            style={{ width: 150, height: 150 }}
                        />
                    }
                    title={'未获取到图片'}
                    description="获取不到图片，请重试"
                />
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-2">My Pictures</h1>
                    <h2 className="text-1xl font-bold mb-10">
                        The photo records the person behind it
                    </h2>
                    <div
                        className="w-full flex flex-wrap gap-4"
                        style={{ justifyContent: 'center', rowGap: '16px' }}>
                        {loadedPhotos.map((photo, index) => (
                            <motion.div
                                key={index}
                                className="rounded-lg shadow-md"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.5,
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    flex: '0 0 calc(33.333% - 16px)',
                                    boxSizing: 'border-box',
                                }}>
                                <Image
                                    src={photo.url}
                                    alt={`Photo ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                    }}
                                    onClick={() =>
                                        console.log('图片信息: ', photo)
                                    }
                                    preview
                                />
                            </motion.div>
                        ))}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default Pictures;
