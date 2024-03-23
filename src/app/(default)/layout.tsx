"use client";
import Header from '@/components/header';


const DefaultLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default DefaultLayout;