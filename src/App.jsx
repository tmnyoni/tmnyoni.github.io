import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Layout } from "./components";

import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.css";

/**
 * In this function I put all the routes to
 * navigate the website.
 * 
 * @returns jsx.
 */
export default function App() {
    return (
        <Layout>
            <Routes>
                <Route
                    exact path="/"
                    element={<Home />}
                />
            </Routes>
        </Layout>
    );
}