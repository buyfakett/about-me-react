import Comment from '@/util/Comment';
import Footer from '@/view/Footer';
import { buildInfo } from '@/default_data/buildInfo';
import BackToTop from '@/view/BackToTop';
import React from 'react';
import NavBar from '@/view/NavBar';
import { Outlet } from 'react-router';
import Watermark from '@hi-ui/watermark';
import { myName, skipUrl } from '@/config';

function Layout() {
    return (
        <div className="bg-gray-900 text-gray-300">
            <Watermark content={[myName, skipUrl.aboutMe]}>
                <NavBar />

                <Outlet />

                <Comment />

                <Footer buildInfo={buildInfo} />

                {/*返回顶部*/}
                <BackToTop />
            </Watermark>
        </div>
    );
}

export default Layout;
