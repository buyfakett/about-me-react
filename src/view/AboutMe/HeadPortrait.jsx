import React from 'react';
import { HeadPortraitCircle } from '@/view/magicui/HeadPortraitCircle';
import { motion } from 'motion/react';
import { imgUrl } from '@/config';

const HeadPortrait = () => {
    return (
        <motion.div
            className="dark:bg-gray-900 dark:text-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}>
            <HeadPortraitCircle>
                <img
                    className="w-32 h-32 rounded-full object-cover"
                    src={imgUrl.headPortrait}
                    alt=""
                />
            </HeadPortraitCircle>
        </motion.div>
    );
};

export default HeadPortrait;
