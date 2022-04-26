import React from "react";
import styles from "../styles/styles.module.css";

export default function Services() {
    return (
        <div
            className="container col-xxl-8 px-4 py-5"
            id="services"
        >
            <h1 className="display-5 fw-bolder lh-1 mb-5 text-center">
                A high quality website
            </h1>

            <div className={`row ${styles.service}`}>
                <div className="col-12 col-sm-12 col-lg-6">
                    <img
                        src="assets/profile.jpg"
                        className="d-block mx-lg-auto my-5 my-md-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="400"
                        height="300"
                        loading="lazy"
                    />
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div>
                        <img
                            src="assets/1.png"
                            alt="number-1"
                            className="img-fluid"
                        />
                    </div>

                    <div className="ms-3">
                        <h5> Is good looking website </h5>
                        <p>
                            A well-thought-out design will portray you as the
                            expert and authority you know you
                            are, instilling trust in your visitors.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`row  flex-row-reverse ${styles.service}`}>
                <div className="col-12 col-sm-12 col-lg-6">
                    <img
                        src="assets/profile.jpg"
                        className="d-block mx-lg-auto my-5 my-md-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="400"
                        height="300"
                        loading="lazy"
                    />
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div>
                        <img
                            src="assets/2.png"
                            alt="number-2"
                            className="img-fluid"
                        />
                    </div>

                    <div className="ms-3">
                        <h5>Is a 27/4 website </h5>
                        <p>
                            A well-designed website with few faults  that disrupt
                            your presence on the internet, hurting your market.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`row ${styles.service}`}>
                <div className="col-12 col-sm-12 col-lg-6">
                    <img
                        src="assets/profile.jpg"
                        className="d-block mx-lg-auto my-5 my-md-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="400"
                        height="300"
                        loading="lazy"
                    />
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div>
                        <img
                            src="assets/3.png"
                            alt="number-3"
                            className="img-fluid"
                        />
                    </div>

                    <div className="ms-3">
                        <h5> Is a client reaching website </h5>
                        <p>
                            Remember that your internet presence is important,
                            so make it easy for your clients to identify you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}