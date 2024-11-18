import React from "react";
import {FaGithub} from "react-icons/fa";
import {FaBilibili} from "react-icons/fa6";

const NavBar = ({note, blog, github, bili, headPortrait}) => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* 左侧 */}
                <div className="flex items-center space-x-4">
                    {/* 头像 */}
                    <a href="/" className="img-box">
                        <img
                            className="w-10 h-10 object-cover"
                            src={headPortrait}
                            alt="head portrait"
                        />
                    </a>
                    {/* 链接 */}
                    <a
                        href={note}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold hover:text-blue-400 transition-colors duration-200"
                    >
                        Note
                    </a>
                    <a
                        href={blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold hover:text-blue-400 transition-colors duration-200"
                    >
                        Blog
                    </a>
                </div>
                {/* 右侧 */}
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
