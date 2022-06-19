import React from "react";
import styles from "../styles/work.process.module.css";

export default function WorkProcess() {
    return (
        <div className={styles.workProcess}>
            <div className="container">
                <div className="row py-5">
                    <div className="mb-3">
                        <h1 className={styles.heading}>
                            My work process
                        </h1>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 my-3">
                        <div className={`${styles.workProcessItem} rounded-3 shadow`}>
                            <div className="card-body">
                                <div className="position-relative">
                                    <h1 className={`${styles.processNumber} position-absolute`}>
                                        01
                                    </h1>
                                </div>
                                <div className="mt-4 mb-4">
                                    <i
                                        className={`fa fa-phone ${styles.processIcon}`}
                                        arial-disabled="true"
                                    ></i>
                                    <h3 className="fw-bolder">
                                        Discovery Call
                                    </h3>
                                </div>
                                <p>
                                    This is a phone call to discuss your project. You tell me what your objectives are and
                                    what your company requires. We also go over average project costs based on the type of
                                    project you want.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-3">
                        <div className={`${styles.workProcessItem} rounded-3 shadow`}>
                            <div className="card-body">
                                <div className="position-relative">
                                    <h1 className={`${styles.processNumber} position-absolute`}>
                                        02
                                    </h1>
                                </div>
                                <div className="mt-4 mb-4">
                                    <i
                                        className={`fa fa-users ${styles.processIcon}`}
                                        arial-disabled="true"
                                    ></i>
                                    <h3 className="fw-bolder">
                                        Strategic meeting
                                    </h3>
                                </div>
                                <p>
                                    We set up a meeting place where we can discuss your project objectives in depth and try
                                    to align them with your company's vision. That is where we will go over all of your
                                    project's requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-3">
                        <div className={`${styles.workProcessItem} rounded-3 shadow`}>
                            <div className="card-body">
                                <div className="position-relative">
                                    <h1 className={`${styles.processNumber} position-absolute`}>
                                        03
                                    </h1>
                                </div>
                                <div className="mt-4 mb-4">
                                    <i
                                        className={`fa fa-pencil ${styles.processIcon}`}
                                        arial-disabled="true"
                                    ></i>
                                    <h3 className="fw-bolder">
                                        Website design
                                    </h3>
                                </div>
                                <p>
                                    This is the first time call, or text where you want
                                    to get to know me and you telling me about your project
                                    and you booking for the strategic meeting that we are
                                    going to have later.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-3">
                        <div className={`${styles.workProcessItem} rounded-3 shadow`}>
                            <div className="card-body">
                                <div className="position-relative">
                                    <h1 className={`${styles.processNumber} position-absolute`}>
                                        04
                                    </h1>
                                </div>
                                <div className="mt-4 mb-4">
                                    <i
                                        className={`fa fa-laptop ${styles.processIcon}`}
                                        arial-disabled="true"
                                    ></i>
                                    <h3 className="fw-bolder">
                                        Website development
                                    </h3>
                                </div>
                                <p>
                                    This is the first time call, or text where you want
                                    to get to know me and you telling me about your project
                                    and you booking for the strategic meeting that we are
                                    going to have later.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-3">
                        <div className={`${styles.workProcessItem} rounded-3 shadow`}>
                            <div className="card-body">
                                <div className="position-relative">
                                    <h1 className={`${styles.processNumber} position-absolute`}>
                                        05
                                    </h1>
                                </div>
                                <div className="mt-4 mb-4">
                                    <i
                                        className={`fa fa-cloud ${styles.processIcon}`}
                                        arial-disabled="true"
                                    ></i>
                                    <h3 className="fw-bolder">
                                        Website deployment
                                    </h3>
                                </div>
                                <p>
                                    This is the first time call, or text where you want
                                    to get to know me and you telling me about your project
                                    and you booking for the strategic meeting that we are
                                    going to have later.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-3">
                        <div className={`${styles.workProcessItem} rounded-3 shadow`}>
                            <div className="card-body">
                                <div className="position-relative">
                                    <h1 className={`${styles.processNumber} position-absolute`}>
                                        06
                                    </h1>
                                </div>
                                <div className="mt-4 mb-4">
                                    <i
                                        className={`fa fa-book ${styles.processIcon}`}
                                        arial-disabled="true"
                                    ></i>
                                    <h3 className="fw-bolder">
                                        Reviews
                                    </h3>
                                </div>
                                <p>
                                    This is the first time call, or text where you want
                                    to get to know me and you telling me about your project
                                    and you booking for the strategic meeting that we are
                                    going to have later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}