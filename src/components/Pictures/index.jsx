import React, { useEffect, useState, useRef } from 'react';
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
    const [displayCount, setDisplayCount] = useState(10);
    const [shouldStartLoading, setShouldStartLoading] = useState(false);

    const PHOTOS_PER_LOAD = 5;
    const PHOTOS_PER_ROW = 3; // 假设每行显示3张图片
    const observerRef = useRef(null);
    const loadTriggerRef = useRef(null);

    // 添加延迟加载控制
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldStartLoading(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // 计算图片在一行中应该占据的宽度百分比
    const calculateImageWidth = (width, height) => {
        const aspectRatio = width / height;
        return `${aspectRatio * 30}%`; // 基础高度为30%，根据宽高比调整宽度
    };

    // 获取图片列表
    useEffect(() => {
        if (!shouldStartLoading) return;

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
    }, [shouldStartLoading]);

    // 批量加载图像的功能
    useEffect(() => {
        if (!shouldStartLoading) return;

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
                    if (
                        !prevPhotos.some((photo) => photo.url === photoData.url)
                    ) {
                        return [...prevPhotos, photoData];
                    }
                    return prevPhotos;
                });
            }
        };

        loadImages();
    }, [currentIndex, pictureList.urls, shouldStartLoading]);

    // 修改无限滚动触发逻辑
    useEffect(() => {
        if (!pictureList?.urls?.length) return;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const handleIntersection = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setCurrentIndex((prevIndex) => {
                    const newIndex = prevIndex + PHOTOS_PER_LOAD;
                    if (newIndex < pictureList.count) {
                        setDisplayCount((prev) => prev + PHOTOS_PER_LOAD);
                        return newIndex;
                    }
                    return prevIndex;
                });
            }
        };

        observerRef.current = new IntersectionObserver(
            handleIntersection,
            options,
        );

        if (loadTriggerRef.current) {
            observerRef.current.observe(loadTriggerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [pictureList, displayCount]);

    // 计算触发加载的元素位置
    const getTriggerElementIndex = () => {
        const totalDisplayed = Math.min(displayCount, pictureList.urls.length);
        const rowCount = Math.ceil(totalDisplayed / PHOTOS_PER_ROW);
        return Math.max(0, (rowCount - 2) * PHOTOS_PER_ROW - 1);
    };

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
                        {pictureList.urls
                            .slice(0, displayCount)
                            .map((photo, index) => (
                                <motion.div
                                    key={index}
                                    ref={
                                        index === getTriggerElementIndex()
                                            ? loadTriggerRef
                                            : null
                                    }
                                    className="rounded-lg shadow-md overflow-hidden"
                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                        scale: 0.98,
                                    }}
                                    animate={
                                        loadedPhotos.some(
                                            (p) => p.url === photo.url,
                                        )
                                            ? {
                                                  opacity: 1,
                                                  x: 0,
                                                  scale: 1,
                                              }
                                            : {
                                                  opacity: 0,
                                                  x: -20,
                                                  scale: 0.98,
                                              }
                                    }
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeOut',
                                        delay: loadedPhotos.some(
                                            (p) => p.url === photo.url,
                                        )
                                            ? 1.5
                                            : 0,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: calculateImageWidth(
                                            photo.width,
                                            photo.height,
                                        ),
                                        aspectRatio: `${photo.width} / ${photo.height}`,
                                        minWidth: '300px',
                                        maxWidth: '800px',
                                    }}>
                                    {loadedPhotos.some(
                                        (p) => p.url === photo.url,
                                    ) ? (
                                        <Image
                                            src={photo.url}
                                            alt={`Photo ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            onClick={() =>
                                                console.log('图片信息: ', photo)
                                            }
                                            preview
                                        />
                                    ) : (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default Pictures;
