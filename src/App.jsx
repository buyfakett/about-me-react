import React from 'react';
import useInitialData from '@/hooks/useInitialData';
import { Route, Routes } from 'react-router';
import AboutMe from '@/view/AboutMe';
import Tools from '@/view/Tools';
import Urls from '@/view/Urls';
import NotFound from '@/404';
import Pictures from '@/view/Pictures';
import ChangeLog from '@/util/ChangeLog';
import Coffee from '@/view/Coffee';
import Projects from '@/view/Projects/index';
import Layout from '@/layout/index';
import Blogs from '@/view/Blogs/index';
import useInitialBrowser from "@/hooks/useInitialBrowser";

const App = () => {
    // 初始化浏览器
    useInitialBrowser();
    // 初始化数据
    useInitialData();

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
