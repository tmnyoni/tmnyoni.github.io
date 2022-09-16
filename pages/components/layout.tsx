import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="mx-2 md:mx-24 md:px-12">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
