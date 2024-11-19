import React, {useEffect} from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";

const languages = [
    {name: "Python", percentage: 40, color: "bg-blue-500"},
    {name: "shell", percentage: 25, color: "bg-blue-500"},
    {name: "VUE", percentage: 20, color: "bg-green-500"},
    {name: "PHP", percentage: 15, color: "bg-red-500"},
];

const skipUrl = {
    aboutMe: "www.tteam.icu",
    note: "https://note.tteam.icu",
    blog: "https://blog.tteam.icu",
    github: "https://github.com/buyfakett",
    bili: "https://space.bilibili.com/11479221",
}

const imgUrl = {
    headPortrait: "https://tc.tteam.icu/i/2024/10/22/xhykcg-3.webp"
}

const umamiScript = `<script defer src="https://umami.tteam.icu/script.js" data-website-id="12d3e9e9-3982-43a1-a285-e2f611073a71"></script>`

const App = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        link.href = imgUrl.headPortrait;
        document.head.appendChild(link);

        // 清理副作用
        return () => {
            document.head.removeChild(link);
        };
        if (process.env.NODE_ENV === 'production') {
            // 判断访问的域名
            if (window.location.hostname !== skipUrl.aboutMe) {
                const newUrl = `https://${skipUrl.aboutMe}`;
                window.location.replace(newUrl);  // 使用 replace 来重定向并避免用户后退
            }

            // 如果是生产环境, 就加上umami
            // 将 script 标签插入到 head
            const div = document.createElement('div');
            div.innerHTML = umamiScript; // 将 HTML 字符串插入到 div 中
            document.head.appendChild(div.firstChild); // 将 script 插入到 head
        }
    }, []);
    return (
        <>
            <NavBar note={skipUrl.note} blog={skipUrl.blog} github={skipUrl.github} bili={skipUrl.bili} headPortrait={imgUrl.headPortrait}/>
            <AboutMe languages={languages} headPortrait={imgUrl.headPortrait}/>
            <Footer github={skipUrl.github}/>
        </>
    );
};

export default App;
