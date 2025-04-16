import { useEffect } from 'react';
import { imgUrl, umamiId, umamiScript } from '@/config';
import useLanguageStore from '@/stores/language.jsx';
import { useLocation } from 'react-router';

const useInitialBrowser = () => {
    // semi-design的主题默认为暗色
    document.body.setAttribute('theme-mode', 'dark');

    // 判断当前环境是生产环境还是开发环境
    const isProduction = process.env.NODE_ENV === 'production';

    const setLanguageData = useLanguageStore((state) => state.setLanguageData);

    const location = useLocation();

    useEffect(() => {
        // 处理路由变化时移除哈希
        if (location.pathname === '/tools' || location.pathname === '/urls') {
            const handleScroll = () => {
                if (window.scrollY === 0) {
                    window.history.replaceState(
                        null,
                        '',
                        window.location.pathname,
                    );
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (isProduction) {
            const script = document.createElement('script');
            script.src = umamiScript;
            script.defer = true;
            script.setAttribute('data-website-id', umamiId);
            document.head.appendChild(script);

            // 清理副作用
            return () => {
                document.head.removeChild(script);
            };
        }
    }, [isProduction]); // 仅当生产环境变更时执行

    useEffect(() => {
        // 判断浏览器环境是否为中文
        setLanguageData(
            navigator.languages.some((lang) =>
                lang.toLowerCase().startsWith('zh'),
            ),
        );
    }, []);
};

export default useInitialBrowser;
