import React, {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import * as Config from "./config"
import {wakatineDefaultData} from "./default_data/waka_time"
import {buildInfo} from "./default_data/buildInfo"
import Tools from "./components/Tools";
import Urls from "./components/Urls";
import NotFound from "./404";
import Pictures from "./components/Pictures";
import Watermark from "@hi-ui/watermark"
import {BackTop} from '@douyinfe/semi-ui';
import {Helmet} from "react-helmet";

const App = () => {
    // semi-design的主题默认为暗色
    document.body.setAttribute('theme-mode', 'dark');

    // 判断当前环境是生产环境还是开发环境
    const isProduction = process.env.NODE_ENV === 'production';

    const [wakatimeData, setwakatimeData] = useState(wakatineDefaultData);

    useEffect(() => {
        // 动态设置 Favicon
        const link = document.createElement("link");
        link.rel = "icon";
        link.type = "image/x-icon";
        link.href = Config.imgUrl.headPortrait;
        document.head.appendChild(link);

        // 清理副作用
        return () => {
            document.head.removeChild(link);
        };
    }, []); // 此处只执行一次

    useEffect(() => {
        // 调用 API 获取数据
        const getWakatimeData = async () => {
            const response = await fetch(Config.apiList.wakaTime);
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
                    <meta name="git-hash" content={buildInfo.gitHash}/>
                    <meta name="git-branch" content={buildInfo.gitBranch}/>
                    <meta name="commit-date" content={buildInfo.commitDate}/>
                    <meta name="commit-count" content={buildInfo.commitCount}/>
                    <meta name="build-time" content={buildInfo.buildTime}/>
                    {/*umami*/}
                    <script
                        src={Config.umamiScript}
                        defer=""
                        data-website-id={Config.umamiId}
                    />
                </Helmet>
            )}
            <div className="bg-gray-900 text-gray-300">
                <Watermark
                    content={[Config.myName, Config.skipUrl.aboutMe]}
                >
                    <NavBar/>

                    <Routes>
                        <Route path="/" element={<AboutMe wakatimeData={wakatimeData}/>}/>
                        <Route path="/tools" element={<Tools/>}/>
                        <Route path="/urls" element={<Urls/>}/>
                        <Route path="/pictures" element={<Pictures/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>

                    <Footer
                        buildInfo={buildInfo}
                    />

                    {/*返回顶部*/}
                    <BackTop/>
                </Watermark>
            </div>
        </>
    );
};

export default App;
