import React from "react";

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="mt-12 text-gray-400 text-sm">
                © {new Date().getFullYear()} buyfakett. All rights reserved.
            </footer>
        </div>
    );
};

export default Footer;
