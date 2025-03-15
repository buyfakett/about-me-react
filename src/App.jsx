import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import AboutMe from '@/view/AboutMe';
import { apiList, imgUrl, umamiId, umamiScript } from '@/config';
import Tools from '@/view/Tools';
import Urls from '@/view/Urls';
import NotFound from '@/404';
import Pictures from '@/view/Pictures';
import ChangeLog from '@/util/ChangeLog';
import Coffee from '@/view/Coffee';
import Projects from '@/view/Projects/index';
import Layout from '@/layout/index';
import useWakatimeStore from '@/stores/wakatime';
import Blogs from '@/view/Blogs/index';
import useBlogsStore from "@/stores/blogs";

const App = () => {
    // semi-design的主题默认为暗色
    document.body.setAttribute('theme-mode', 'dark');

    // 判断当前环境是生产环境还是开发环境
    const isProduction = process.env.NODE_ENV === 'production';

    const setwakatimeData = useWakatimeStore((state) => state.setWakatimeData);
    const setBlogs = useBlogsStore((state) => state.setBlogsData);

    const location = useLocation();

    useEffect(() => {
        // 处理路由变化时移除哈希
        if (location.pathname === '/tools' || location.pathname === '/urls') {
            const handleScroll = () => {
                if (window.scrollY === 0) {
                    window.history.replaceState(
                        null,
                        '',
                        window.location.pathname,
                    );
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [location.pathname]);

    useEffect(() => {
        // 动态设置 Favicon
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        link.href = imgUrl.headPortrait;
        document.head.appendChild(link);

        // 清理副作用
        return () => {
            document.head.removeChild(link);
        };
    }, []); // 此处只执行一次

    useEffect(() => {
        if (isProduction) {
            const script = document.createElement('script');
            script.src = umamiScript;
            script.defer = true;
            script.setAttribute('data-website-id', umamiId);
            document.head.appendChild(script);

            // 清理副作用
            return () => {
                document.head.removeChild(script);
            };
        }
    }, [isProduction]); // 仅当生产环境变更时执行

    useEffect(() => {
        // 调用 API 获取数据
        const getWakatimeData = async () => {
            const response = await fetch(apiList.wakaTime);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setwakatimeData(result);
        };

        getWakatimeData();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch(apiList.blog);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBlogs(data);
        };

        fetchBlogs();
    }, []);

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/urls" element={<Urls />} />
                    <Route path="/pictures" element={<Pictures />} />
                    <Route path="/changelog" element={<ChangeLog />} />
                    <Route path="/coffee" element={<Coffee />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
