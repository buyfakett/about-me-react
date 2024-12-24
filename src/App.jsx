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
        // 判断生产环境并处理逻辑
        if (process.env.NODE_ENV === "production") {
            // 判断域名并重定向(cloudflare中开启重定向后代码注释)
            // if (window.location.hostname !== Config.skipUrl.aboutMe) {
            //     window.location.replace(`https://${Config.skipUrl.aboutMe}`);
            // }

            // 注入 Umami 脚本
            const umamiScript = document.createElement("script");
            umamiScript.src = Config.umamiScript;
            umamiScript.defer = true;
            umamiScript.dataset.websiteId = Config.umamiId;
            document.head.appendChild(umamiScript);
        } else {
            // 在开发的时候注入react-scan(现有浏览器插件，不需要了)
            // const reactScanScript = document.createElement("script");
            // reactScanScript.src = "https://unpkg.com/react-scan/dist/auto.global.js";
            // reactScanScript.async = true;
            // document.head.appendChild(reactScanScript);
        }

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
            <Helmet>
                {/* 动态注入构建信息到 <head> */}
                <meta name="git-hash" content={buildInfo.gitHash}/>
                <meta name="git-branch" content={buildInfo.gitBranch}/>
                <meta name="commit-date" content={buildInfo.commitDate}/>
                <meta name="build-time" content={buildInfo.buildTime}/>
            </Helmet>
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
