'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

interface TypingAnimationProps {
    text: string;
    duration?: number;
    className?: string;
}

export function TypingAnimation({
    text,
    duration = 200,
    className,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [currentLine, setCurrentLine] = useState<number>(0);
    const [i, setI] = useState<number>(0);

    const lines = text.split('\n'); // 按换行符分割文本

    useEffect(() => {
        const typingEffect = setInterval(() => {
            if (currentLine < lines.length) {
                const line = lines[currentLine];
                if (i < line.length) {
                    setDisplayedText((prev) => prev + line[i]);
                    setI(i + 1);
                } else if (currentLine < lines.length - 1) {
                    setDisplayedText((prev) => prev + '\n'); // 添加换行符
                    setCurrentLine(currentLine + 1);
                    setI(0);
                } else {
                    clearInterval(typingEffect);
                }
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [currentLine, i, duration, lines]);

    return (
        <h1
            className={cn(
                'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-xs whitespace-pre-wrap',
                className,
            )}>
            {displayedText || text}
        </h1>
    );
}
