import React from "react";

export default function HeroSection() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-12 col-sm-12 col-lg-6">
                    <img
                        src="assets/profile.jpg"
                        className="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
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
                            className="btn btn-outline-secondary px-4"
                            href="/contact"
                        >
                            Lets build your website together
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

