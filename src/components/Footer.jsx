import React from "react";

const Footer = ({github}) => {
    return (
        <>
            <footer className="border-t border-gray-700 py-4 text-center text-sm mt-20">
                <p>© 2024 <a href={github} className="text-blue-400 hover:underline">buyfakett</a>.
                    All rights reserved.</p>
                <p>
                    Powered by <a href="https://reactjs.org/" className="text-blue-400 hover:underline">React</a> &amp;
                    <a href="https://tailwindcss.com/" className="text-blue-400 hover:underline">Tailwind CSS</a>.
                </p>
            </footer>
        </>

    );
};

export default Footer;
