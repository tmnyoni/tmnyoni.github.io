import React from "react";
import {
    CallToAction,
    Hero,
    Product,
    WorkProcess,
    About, 
    BlogHeadings
} from "../components";

export default function Home() {
    return (
        <div>
            <Hero />
            <Product />
            <WorkProcess />
            <About />
            <BlogHeadings />
            <CallToAction />
        </div>
    )
}