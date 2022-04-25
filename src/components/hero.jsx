import React from "react";
import styles from "../styles/styles.module.css"

export default function Hero() {
    return (
        <div className={styles.heroSection}>
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <img
                            src="assets/profile.jpg"
                            className="img-fluid d-block mx-lg-auto my-5 my-md-auto"
                            alt="hero"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>

                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bolder lh-1 mb-3">
                            I am a freelancer, web developer
                        </h1>
                        <p className="lead">
                            I craft high-quality, beautiful websites that are brand-accurate and user-friendly
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a
                                type="button"
                                className="btn btn-dark btn-lg px-4"
                                href="/contact"
                            >
                                Lets build your website together
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

