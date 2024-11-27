import React from "react";
import {FaCloudflare, FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";

const Footer = ({github}) => {
    return (
        <>
            <footer className="border-t border-gray-700 py-6 text-center text-sm mt-20 bg-gray-800 text-gray-300">
                <div className="max-w-4xl mx-auto">
                    <p className="mb-2">
                        © 2024
                        <a href={github} className="text-blue-400 hover:underline ml-1">
                            buyfakett
                        </a>.
                        All rights reserved.
                    </p>
                    <p className="flex flex-wrap justify-center items-center space-x-3">
                        <span>Powered by</span>
                        <a
                            href="https://reactjs.org/"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <FaReact className="text-cyan-500 text-lg"/>
                            <span>React</span>
                        </a>
                        <a
                            href="https://tailwindcss.com/"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <RiTailwindCssFill className="text-teal-400 text-lg"/>
                            <span>Tailwind CSS</span>
                        </a>
                        <a
                            href="https://www.cloudflare.com/"
                            className="flex items-center space-x-1 text-blue-400 hover:underline"
                        >
                            <FaCloudflare className="text-orange-500 text-lg"/>
                            <span>Cloudflare</span>
                        </a>
                    </p>
                </div>
            </footer>
        </>

    );
};

export default Footer;
