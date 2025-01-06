import React from 'react';
import {BackTop} from '@douyinfe/semi-ui';
import {FaArrowUpLong} from "react-icons/fa6";

class BackToTop extends React.Component {
    state = {
        scrollProgress: 0,  // 用来存储滚动进度
        visible: false,      // 用来控制 BackTop 显示/隐藏
    };

    // 计算滚动进度
    handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const progress = (scrollTop / scrollHeight) * 100;

        this.setState({
            scrollProgress: progress,
            visible: scrollTop > 400,  // 控制 BackTop 组件可见的滚动高度
        });
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const {scrollProgress, visible} = this.state;

        // 修改按钮样式
        const buttonStyle = {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            borderRadius: '50%',
            backgroundColor: '#6366f1',
            color: '#fff',
            zIndex: 2,
            border: 'none',
            cursor: 'pointer',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        // 容器样式调整
        const containerStyle = {
            position: 'fixed',
            bottom: 50,
            right: 100,
            width: 50,  // 调整容器大小
            height: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            visibility: visible ? 'visible' : 'hidden',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 999, // 确保整个组件在最上层
        };

        // 进度条填充样式调整
        const progressFillStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: `conic-gradient(
                transparent 0deg,
                #818cf8 0deg ${scrollProgress * 3.6}deg,
                transparent ${scrollProgress * 3.6}deg 360deg
            )`,
            transition: 'background 0.1s ease-out',
            boxSizing: 'border-box',
        };

        return (
            <div style={containerStyle}>
                {/* 进度条填充 */}
                <div style={progressFillStyle}/>
                {/* BackTop 按钮 */}
                <BackTop style={buttonStyle}>
                    <FaArrowUpLong/>
                </BackTop>
            </div>
        );
    }
}

export default BackToTop;
