import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

/**
 * Getting the app div on the html file and
 *  creating the root node from it.
 */
const app = document.getElementById("app");
const root = createRoot(app);

/**
 * Rendering the html document using
 * the root node that has been created.
 * 
 * And I have included the route, that routes
 * to all paths. Then individual routes are put
 * on the App.js file.
 */
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={<App />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
