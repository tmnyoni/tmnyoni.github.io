import React from "react";

import {
    HeroSection,
    ServiceSection,
    Tools,
} from "./sections";

import {
    Navbar,
    Footer
} from "./components";

import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
    return (
        <div className="page">
            <Navbar />
            <HeroSection />
            <ServiceSection />
            <Tools />
            <Footer />
        </div>
    );
}