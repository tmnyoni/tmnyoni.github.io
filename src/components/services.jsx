import React from "react";
import { } from "react-bootstrap-icons";
import styles from "../styles/styles.module.css";

export default function Services() {
    return (
        <div
            className="container col-xxl-8 my-4 px-4 py-5"
            id="services"
        >
            <h1 className="display-5 fw-bolder lh-1 mb-5 text-center">
                A high quality website
            </h1>

            <div className={styles.services}>
                <div className={`row ${styles.service}`}>
                    <div className="col-12 col-lg-6">
                        <img
                            src="assets/beauty.png"
                            className="d-block mx-lg-auto my-5 my-md-auto img-fluid"
                            alt="Bootstrap Themes"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="ms-3">
                            <h3> Is a good looking website </h3>
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
                            src="assets/urban-scientists-studying-atom-by-the-computer.png"
                            className="d-block mx-lg-auto my-5 my-md-auto img-fluid"
                            alt="Bootstrap Themes"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="ms-3">
                            <h3> Is a brand-accurate website </h3>
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
                            src="assets/urban-851.png"
                            className="d-block mx-lg-auto my-5 my-md-auto img-fluid"
                            alt="Bootstrap Themes"
                            width="600"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="ms-3">
                            <h3> Is a client reaching website </h3>
                            <p>
                                Remember that your internet presence is important,
                                so make it easy for your clients to identify you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}