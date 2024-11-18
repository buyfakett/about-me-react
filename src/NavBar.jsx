import React from "react";
import {FaGithub} from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";

const githubUrl = "https://github.com/buyfakett"
const biliUrl = "https://space.bilibili.com/11479221"

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* 左侧：博客链接 */}
                {/*<img src={require('%PUBLIC_URL%/favicon.ico')} alt=""/>*/}
                <div className="text-lg font-bold">
                    <a
                        href="https://blog.tteam.icu"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        博客
                    </a>
                </div>
                {/* 右侧：社交媒体图标 */}
                <div className="flex space-x-4">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-200"
                    >
                        <FaGithub size={24}/>
                    </a>
                    <a
                        href={biliUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-200"
                    >
                        <FaBilibili size={24}/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
