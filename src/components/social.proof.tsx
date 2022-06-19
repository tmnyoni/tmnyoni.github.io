import React from "react";

export default function SocialProof() {
    return (
        <div className="social-proof py-5">
            <div className="container">
                <div className="d-flex flex-column align-items-center text-center">
                    <h6 className="fw-bolder text-uppercase section-heading">
                        Client Testimonials
                    </h6>
                    <h2 className="fw-bolder display-5">
                        Your own voice is horsy
                    </h2>
                    <p className="section-description">
                        Read through my blog, can to know my thoughts about technology, and use it to your advantage to
                        improve your business.
                    </p>
                </div>
                <div className="row py-3 py-sm-4 py-lg-5 align-items-center justify-content-center">
                    <div className="card mb-3 max-w-40">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img
                                    src="assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <p className="card-text">
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </p>
                                    <h5 className="card-title">
                                        CEO Terminology Pvt
                                    </h5>
                                    <p className="card-text mt-0 pt-0">
                                        <small className="text-muted">
                                            Thabani Mlambo
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}