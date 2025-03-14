import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { NumberTicker } from '@/view/magicui/NumberTicker';
import { TypingAnimation } from '@/view/magicui/TypingAnimation';
import SkillSection from './SkillSection';
import { languageSkillData } from '@/config';
import useWakatimeStore from '@/stores/wakatime';

const LanguageSection = () => {
    const wakatimeData = useWakatimeStore((state) => state.wakatimeData);

    return (
        <>
            {/* 文字介绍 */}
            <div className="text-center mb-8 h-[70px]">
                <TypingAnimation
                    text={[
                        "Hi ! I'm a full stack engineer,my job position is ops",
                        'My MBTI type is INFJ-T.',
                    ].join('\n')}
                    duration={20}
                    className="text-lg"
                />
            </div>

            {/* 技能展示 */}
            <div className="w-full max-w-xl md:mt-0.5 mt-18">
                <SkillSection sections={languageSkillData} />
            </div>

            {/* 语言使用时间排行榜 */}
            <section className="w-full max-w-xl mt-10">
                <h2 className="text-2xl font-semibold">Languages I Use</h2>
                <a
                    href="https://wakatime.com/dashboard"
                    target="_blank"
                    rel="wakatime"
                    className="text-gray-500 text-sm hover:text-gray-700">
                    data statistics form {wakatimeData.start_time}
                    <br />
                    last update at {wakatimeData.update_time}
                </a>
                <div className="space-y-4 mt-4">
                    {wakatimeData.languages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            className="w-full bg-gray-800 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}>
                            <div
                                className={clsx(
                                    'h-9 flex items-center px-0.1 text-sm font-medium',
                                    lang.color,
                                )}
                                style={{ width: `${lang.percentage}%` }}>
                                &nbsp;&nbsp;
                                {lang.name}
                                &nbsp;&nbsp;
                                <NumberTicker
                                    value={lang.percentage}
                                    decimalPlaces={2}
                                />
                                %
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default LanguageSection;
