import React from "react";
import {FaCloudflare, FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {IconSemiLogo} from "@douyinfe/semi-icons";
import {skipUrl} from "../config";

const Footer = ({buildInfo}) => {
    return (
        <>
            <footer className="border-t border-gray-700 py-6 text-center text-sm mt-20 bg-gray-800 text-gray-300">
                <div className="max-w-4xl mx-auto">
                    <p className="mb-2">
                        © 2024
                        <a
                            href={skipUrl.github}
                            target="_blank"
                            className="text-blue-400 hover:underline ml-1"
                        >
                            buyfakett
                        </a>
                        . All rights reserved.
                    </p>
                    <p className="flex flex-wrap justify-center items-center space-x-3">
                        <span>Powered by</span>
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <FaReact className="text-cyan-500 text-lg"/>
                            <span>React</span>
                        </a>
                        <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <RiTailwindCssFill className="text-teal-400 text-lg"/>
                            <span>Tailwind CSS</span>
                        </a>
                        <a
                            href="https://semi.design/zh-CN/"
                            target="_blank"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <IconSemiLogo className="text-black text-lg"/>
                            <span>Semi Design</span>
                        </a>
                        <a
                            href="https://react-icons.github.io/react-icons/"
                            target="_blank"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <FaReact className="text-red-500 text-lg"/>
                            <span>React Icons</span>
                        </a>
                        <a
                            href="https://www.cloudflare.com/"
                            target="_blank"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <FaCloudflare className="text-orange-500 text-lg"/>
                            <span>Cloudflare</span>
                        </a>
                        <a
                            href="https://motion.dev/"
                            target="_blank"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <img
                                src="https://img.tteam.icu/i/2024/12/11/lsxlk0-3.webp"
                                alt="motion"
                                className="w-4 h-4 rounded-full"
                            />
                            <span>Motion</span>
                        </a>
                        <a
                            href="https://magicui.design/"
                            target="_blank"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <img src="https://img.tteam.icu/i/2024/12/11/lwvuhg-3.webp"
                                 alt="magicui"
                                 className="w-4 h-4 rounded-full"
                            />
                            <span>Magic UI</span>
                        </a>
                    </p>
                </div>

                {/* 构建信息部分 */}
                <div className="mt-4 text-sm text-gray-400">
                    <p className="font-semibold">构建信息</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <div className="bg-gray-700 px-4 py-2 rounded-md">
                            <span className="font-medium text-blue-400">Git Hash:</span>
                            <span>{buildInfo.gitHash}</span>
                        </div>
                        <div className="bg-gray-700 px-4 py-2 rounded-md">
                            <span className="font-medium text-blue-400">Git 分支:</span>
                            <span>{buildInfo.gitBranch}</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
