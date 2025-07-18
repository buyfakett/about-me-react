import React from 'react';
import { CiShare1 } from 'react-icons/ci';
import { Link } from 'react-router';
import { Divider } from '@douyinfe/semi-ui';
import { myName, skipUrl } from '@/config';

const NavBar = () => {
    return (
        <nav className="dark:bg-gray-800 dark:text-white px-4 py-2 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-10">
                    {/* 名字(只在电脑端显示) */}
                    <Link to="/">
                        <span className="font-bold text-lg hidden md:flex">
                            {myName}
                        </span>
                    </Link>

                    {/*分割线*/}
                    <Divider layout="vertical" className="bg-white" />

                    {/* 链接 */}
                    <Link
                        to="/tools"
                        className="flex items-center text-lg font-bold dark:hover:text-blue-400 transition-colors duration-200 md:ml-10 ml-5">
                        Tools
                    </Link>
                    <Link
                        to="/urls"
                        className="flex items-center text-lg font-bold dark:hover:text-blue-400 transition-colors duration-200">
                        Urls
                    </Link>
                    {/*只在电脑端显示这个按钮*/}
                    <Link
                        to="/pictures"
                        className="items-center text-lg font-bold dark:hover:text-blue-400 transition-colors duration-200 hidden md:flex">
                        Pictures
                    </Link>
                    <a
                        href={skipUrl.note}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-lg font-bold dark:hover:text-blue-400 transition-colors duration-200">
                        Note
                        <CiShare1 className="ml-1 w-3 h-3" />
                    </a>
                    <a
                        href={skipUrl.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-lg font-bold dark:hover:text-blue-400 transition-colors duration-200">
                        Blog
                        <CiShare1 className="ml-1 w-3 h-3" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
