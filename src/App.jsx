import React, {useEffect, useState} from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import * as Config from "./config"
import {wakatineDefaultData} from "./default_data/waka_time"

const App = () => {
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
            // 判断域名并重定向
            if (window.location.hostname !== Config.skipUrl.aboutMe) {
                window.location.replace(`https://${Config.skipUrl.aboutMe}`);
            }

            // 注入 Umami 脚本
            const script = document.createElement("script");
            script.src = Config.umamiScript;
            script.defer = true;
            script.dataset.websiteId = Config.umamiId;
            document.head.appendChild(script);
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
        <div className="bg-gray-900 text-gray-300">
            <NavBar
                skipUrl={Config.skipUrl}
                headPortrait={Config.imgUrl.headPortrait}
            />
            <AboutMe
                wakatimeData={wakatimeData}
                imgUrl={Config.imgUrl}
                skipUrl={Config.skipUrl}
            />
            <Footer
                github={Config.skipUrl.github}
            />
        </div>
    );
};

export default App;
