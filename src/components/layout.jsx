import React from "react";
import Navbar from "./navbar";
import styles from "../styles/styles.module.css";

/**
 * This component is for setting all the widgets
 * that are automatically there on all the pages.
 * 
 * @param {*} children components to be rendered. 
 * @returns jsx.
 */
export default function Layout({ children }) {
    return (
        <div className={styles.page}>
            <Navbar />
            {children}
        </div>
    )
}