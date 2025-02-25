import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import AboutMe from '@/view/AboutMe';
import { apiList, imgUrl, umamiId, umamiScript } from '@/config';
import { buildInfo } from '@/default_data/buildInfo';
import Tools from '@/view/Tools';
import Urls from '@/view/Urls';
import NotFound from '@/404';
import Pictures from '@/view/Pictures';
import { Helmet } from 'react-helmet';
import ChangeLog from '@/util/ChangeLog';
import Coffee from '@/view/Coffee';
import Projects from '@/view/Projects/index';
import Layout from '@/layout/index';
import useWakatimeStore from '@/stores/wakatime';

const App = () => {
    // semi-design的主题默认为暗色
    document.body.setAttribute('theme-mode', 'dark');

    // 判断当前环境是生产环境还是开发环境
    const isProduction = process.env.NODE_ENV === 'production';

    const setwakatimeData = useWakatimeStore((state) => state.setwakatimeData);

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

    return (
        <>
            {isProduction && (
                <Helmet>
                    {/* 动态注入构建信息到 <head> */}
                    <meta name="git-hash" content={buildInfo.gitHash} />
                    <meta name="git-branch" content={buildInfo.gitBranch} />
                    <meta name="commit-date" content={buildInfo.commitDate} />
                    <meta name="commit-count" content={buildInfo.commitCount} />
                    <meta name="build-time" content={buildInfo.buildTime} />
                    {/*umami*/}
                    <script src={umamiScript} data-website-id={umamiId} defer />
                </Helmet>
            )}
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/urls" element={<Urls />} />
                    <Route path="/pictures" element={<Pictures />} />
                    <Route path="/changelog" element={<ChangeLog />} />
                    <Route path="/coffee" element={<Coffee />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
