import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top w-100 bg-white">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Tmnyoni
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon">
                    </span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarText"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#services"
                            >
                                Service
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#footer"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <a class="btn btn-outline-secondary">
                        Get in touch
                    </a>
                </div>
            </div>
        </nav>
    )
}