import React, {useEffect} from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

const languages = [
    {name: "Python", percentage: 40, color: "bg-blue-500"},
    {name: "shell", percentage: 25, color: "bg-blue-500"},
    {name: "VUE", percentage: 20, color: "bg-green-500"},
    {name: "PHP", percentage: 15, color: "bg-red-500"},
];

const skipUrl = {
    note: "https://note.tteam.icu",
    blog: "https://blog.tteam.icu",
    github: "https://github.com/buyfakett",
    bili: "https://space.bilibili.com/11479221",
}

const umamiScript = `<script defer src="https://umami.tteam.icu/script.js" data-website-id="12d3e9e9-3982-43a1-a285-e2f611073a71"></script>`

const App = () => {
    useEffect(() => {
        // 如果是生产环境, 就加上umami
        if (process.env.IS_PRODUCTION === "true") {
            // 获取当前的主域名
            const currentHost = window.location.hostname;
            // 判断是否是非 www 的域名
            if (!currentHost.startsWith('www.')) {
                // 如果不是 www.xxx，重定向到 www.xxx
                const newUrl = `https://www.${currentHost}`;
                window.location.replace(newUrl);  // 使用 replace 来重定向并避免用户后退
            }

            // 将 script 标签插入到 head
            const div = document.createElement('div');
            div.innerHTML = umamiScript; // 将 HTML 字符串插入到 div 中
            document.head.appendChild(div.firstChild); // 将 script 插入到 head
        }
    }, []);
    return (
        <div>
            <NavBar note={skipUrl.note} blog={skipUrl.blog} github={skipUrl.github} bili={skipUrl.bili}/>
            <AboutMe languages={languages}/>
            <Footer github={skipUrl.github}/>
        </div>
    );
};

export default App;
