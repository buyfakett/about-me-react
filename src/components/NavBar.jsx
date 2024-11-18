import React from "react";
import {FaGithub} from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";

const NavBar = ({note, blog, github, bili}) => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* 左侧：博客链接 */}
                {/*<img src={require('%PUBLIC_URL%/favicon.ico')} alt=""/>*/}
                <div className="text-lg font-bold space-x-4">
                    <a
                        href={note}
                        target="_blank"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Node
                    </a>
                    <a
                        href={blog}
                        target="_blank"
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        Blog
                    </a>
                </div>
                {/* 右侧：社交媒体图标 */}
                <div className="flex space-x-4">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-200"
                    >
                        <FaGithub size={24}/>
                    </a>
                    <a
                        href={bili}
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
