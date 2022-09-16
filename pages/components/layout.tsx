import React, { PropsWithChildren } from 'react'
import Navbar from './navbar'; 
import Footer from "./footer";

const Layout = (props: PropsWithChildren) => {
    return (
        <React.Fragment>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;