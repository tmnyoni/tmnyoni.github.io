import React from "react";
import { Routes, Route } from "react-router-dom";
import {  Page404 } from "./pages";
import { Layout } from "./components";

import "./styles/styles.css";
import "./styles/bootstrap.css"

import {
    CallToAction,
    Hero,
    Product,
    WorkProcess,
    About, 
    BlogHeadings,
    SocialProof
} from "./components";

const Home = () => {
    return (
        <>
            <Hero />
            <Product />
            <WorkProcess />
            <About />
            <BlogHeadings />
            <SocialProof />
            <CallToAction />
        </>
    )
}

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route
                    exact path="/"
                    element={<Home />}
                />

                <Route
                    path="*"
                    element={<Page404 />}
                />
            </Routes>
        </Layout>
    );
}