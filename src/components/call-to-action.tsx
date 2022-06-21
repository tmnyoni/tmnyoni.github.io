import React from "react";
import SocialMedia from "./social.networks.tsx";
import styles from "../styles/styles.module.css";


export default function CallToAction() {
    return (
        <div className={`container col-xxl-8 ${styles.callToAction}`}>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="text-center">
                        <h5>
                            Need a high-quality website
                        </h5>
                        <div className={styles.bigHeading}>
                            Let's build it
                            <span className="text-danger">
                                {" "} now.
                            </span>
                        </div>
                    </div>

                    <div className={styles.buttonGroup}>
                        <a
                            href="#call"
                            className="btn btn-outline-secondary btn-lg me-sm-3 "
                        >
                            Give me a call
                        </a>
                        <a
                            href="#mail"
                            className="btn btn-dark btn-lg"
                        >
                            Or send me an email
                        </a>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between flex-column flex-sm-row align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/logo.png"
                                    alt="logo"
                                    width={45}
                                />
                                <div className="ms-2">
                                    Tawanda M.
                                </div>
                            </div>
                            <SocialMedia />
                        </div>
                        <hr />
                        <div className={`d-flex justify-content-between flex-column flex-md-row ${styles.footerText}`}>
                            <div> @All rights reserved </div>
                            <div> Designed and built by myself with adobe XD and ReactJs </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}