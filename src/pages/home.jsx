import React from "react";
import {
    CallToAction,
    Hero,
    Product,
    WorkProcess,
    About, 
    BlogHeadings,
    SocialProof
} from "../components";

export default function Home() {
    return (
        <div>
            <Hero />
            <Product />
            <WorkProcess />
            <About />
            <BlogHeadings />
            <SocialProof />
            <CallToAction />
        </div>
    )
}