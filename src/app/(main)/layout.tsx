import Footer from '@/src/components/Footer/page';
import Navbar from '@/src/components/Navbar/page';
import ScrollToTop from '@/src/components/shared/ScrollToTop';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode; }) => {
    return (
        <div>
            <main className="grow">
                <ScrollToTop/>
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default layout;