import React from "react";
import {motion} from "framer-motion";
import clsx from "clsx";
import Footer from "./Footer";
import NavBar from "./NavBar";

const languages = [
    {name: "Python", percentage: 40, color: "bg-blue-500"},
    {name: "shell", percentage: 25, color: "bg-blue-500"},
    {name: "VUE", percentage: 20, color: "bg-green-500"},
    {name: "PHP", percentage: 15, color: "bg-red-500"},
];

const App = () => {
    return (
        <div>
            <NavBar/>
            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">

                {/* Header Section */}
                <header className="text-center mb-8">
                    <motion.h1
                        className="text-4xl font-bold mb-4"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        className="text-lg"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        Hello! I'm a developer passionate about creating efficient and scalable software solutions.
                    </motion.p>
                </header>

                {/* Language Section */}
                <section className="w-full max-w-xl">
                    <h2 className="text-2xl font-semibold mb-4">Languages I Use</h2>
                    <div className="space-y-4">
                        {languages.map((lang, index) => (
                            <motion.div
                                key={lang.name}
                                className="w-full bg-gray-800 rounded-lg overflow-hidden"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5, delay: index * 0.2}}
                            >
                                <div
                                    className={clsx(
                                        "h-8 flex items-center px-2 text-sm font-medium",
                                        lang.color
                                    )}
                                    style={{width: `${lang.percentage}%`}}
                                >
                                    {lang.name} ({lang.percentage}%)
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Footer/>
            </div>
        </div>
    );
};

export default App;
