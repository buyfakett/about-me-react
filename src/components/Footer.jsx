import React from "react";

const Footer = ({github}) => {
    return (
        <div className="bg-gray-900 text-gray-300">
            <footer className="border-t border-gray-700 py-4 text-center text-sm">
                <p>© 2024 <a href={github} className="text-blue-400 hover:underline">buyfakett</a>.
                    All rights reserved.</p>
                <p>
                    Powered by <a href="https://reactjs.org/" className="text-blue-400 hover:underline">React</a> &amp;
                    <a href="https://tailwindcss.com/" className="text-blue-400 hover:underline">Tailwind CSS</a>.
                </p>
            </footer>
        </div>

    );
};

export default Footer;
