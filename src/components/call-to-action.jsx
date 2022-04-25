import React from "react";
import SocialMedia from "./social";


export default function CallToAction() {
    return (
        <div className="container col-xxl-8 px-4 py-5 section footer min-vh-100">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="text-center">
                        <h5>
                            Need a high-quality website
                        </h5>
                        <div className="big-heading">
                            Let's build it <span className="text-danger">now.</span>
                        </div>
                    </div>

                    <div className="button-group">
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

                <div className="footer-bottom">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-between flex-column flex-sm-row align-items-center">
                            <div className="d-flex align-items-center">
                                <h2> TMNYONI </h2>
                                <h6 className="ms-1">
                                    Tawanda M. Nyoni
                                </h6>
                            </div>
                            <SocialMedia />
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between flex-column flex-md-row text-center text-uppercase bottom-text">
                            <div> @All rights reserved </div>
                            <div> Designed and built by myself with adobe XD and ReactJs </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}