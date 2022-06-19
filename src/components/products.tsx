import React from "react";
import { } from "react-bootstrap-icons";
import styles from "../styles/products.module.css";

export default function Product() {

    return (
        <div className={styles.product}>
            <div className="container">
                <div className="row flex-row-reverse py-3 py-sm-4 py-lg-5 align-items-center">
                    <div className="col-12 col-lg-6 ps-lg-5">
                        <h4 className="fw-bolder text-uppercase">
                            A high quality, beautiful website is
                        </h4>
                        <ul className="list-group">
                            <li className="list-group-item border-0 shadow mt-3 rounded-3">
                                <div className="d-flex">
                                    <span className={`${styles.counter} ${styles.counterSuccess} me-2`}>
                                        1
                                    </span>
                                    <div>
                                        <h6> A good looking website </h6>
                                        <small>
                                            A well-thought-out design will portray you as the expert and authority you
                                            know you are,
                                            instilling trust in your visitors.
                                        </small>
                                    </div>
                                </div>

                            </li>
                            <li className="list-group-item d-flex border-0 shadow mt-3 rounded-3">
                                <span className={`${styles.counter} ${styles.counterSecondary} me-2`}>
                                    2
                                </span>
                                <div>
                                    <h6> A brand-accurate website </h6>
                                    <small>
                                        One thing you don't want to do is confuse your customers. So it's a website with
                                        extremely accurate information about your brand.
                                    </small>
                                </div>
                            </li>
                            <li className="list-group-item d-flex border-0 shadow mt-3 rounded-3">
                                <span className={`${styles.counter} ${styles.counterPrimary} me-2`}>
                                    3
                                </span>
                                <div>
                                    <h6> A client-reaching website </h6>
                                    <small>
                                        One thing you don't want to do is perplex your customers. So it's a website with
                                        extremely accurate information about your brand.
                                    </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                        <div>
                            <img
                                src="assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"
                                className="img-fluid rounded-3 "
                                alt="code-on-vscode"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}