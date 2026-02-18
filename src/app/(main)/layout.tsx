import Footer from '@/src/components/Footer/page';
import Navbar from '@/src/components/Navbar/page';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode; }) => {
    return (
        <div>
            <main className="grow">
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default layout;