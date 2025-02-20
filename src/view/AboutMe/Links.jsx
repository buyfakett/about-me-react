import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Typography } from '@douyinfe/semi-ui';
import { FaCoffee } from 'react-icons/fa';
import { skipUrl } from '@/config';

const Links = () => {
    const { Paragraph } = Typography;

    return (
        <motion.div
            className="dark:bg-gray-900 dark:text-gray-300 text-center mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="flex items-center justify-center">
                <Paragraph
                    copyable={{
                        content: `${skipUrl.blog}/rss.xml`,
                        copyTip: 'copy',
                    }}
                    className="text-sm font-bold dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    <span
                        onClick={() =>
                            window.open(`${skipUrl.blog}/rss.xml`, '_blank')
                        }>
                        Follow Me
                    </span>
                </Paragraph>
                <span className="mx-2">|</span>
                {/*<Link*/}
                {/*    to="/changelog"*/}
                {/*    className="text-sm font-bold text-white dark:hover:text-blue-400 transition-colors duration-200">*/}
                {/*    Change Logs*/}
                {/*</Link>*/}
                {/*<span className="mx-2">|</span>*/}
                <Link
                    to="/coffee"
                    className="text-sm font-bold text-white dark:hover:text-blue-400 transition-colors duration-200 flex items-center">
                    <FaCoffee className="mr-1" />
                    Buy Some Coffee
                </Link>
            </div>
        </motion.div>
    );
};

export default Links;
