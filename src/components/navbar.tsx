import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/styles.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // on click outside the navbar.
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top w-100 bg-white">
            <div className="container-fluid px-4">
                <NavLink
                    className={styles.navbarBrand}
                    to="/"
                >
                    <img
                        src="assets/logo.png"
                        alt="logo"
                        width={45}
                    />
                    <div className="ms-2">
                        Tawanda M.
                    </div>
                </NavLink>

                {/* TO-DO: Finish of the animated navbar toggler*/}
                <div
                    className={`${styles.navbarToggler} ${isOpen && "active"} d-none`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon">
                    </span>
                    {''}
                </button>
                <div
                    className={`${styles.navbarCollapse} ${!isOpen && "collapse"}`}
                    id="navbarText"
                >
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/services"
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <Link
                        to="/"
                        className="btn btn-outline-dark btn-sm ms-lg-3"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </nav>
    )
}