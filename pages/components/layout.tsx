import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="mx-4 md:mx-auto md:w-10/12 lg:w-8/12">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
