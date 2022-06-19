import React from "react";

export default function BlogHeadings() {
    return (
        <div className="blog py-5">
            <div className="container">
                <div className="d-flex flex-column align-items-center text-center">
                    <h6 className="fw-bolder text-uppercase section-heading">
                        My Blog
                    </h6>
                    <h2 className="fw-bolder display-5"> Perk up your ears </h2>
                    <p className="section-description">
                        Read through my blog, can to know my thoughts about technology, and use it to your advantage to
                        improve your business.
                    </p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 py-3 py-sm-4 py-lg-5 align-items-center">
                    <div className="col mt-2 mt-md-0">
                        <div className="card">
                            <img
                                src="assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h6 className="text-uppercase text-muted">
                                    Web design
                                </h6>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-2 mt-md-0">
                        <div className="card">
                            <img
                                src="assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h6 className="text-uppercase text-muted">
                                    Business
                                </h6>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-2 mt-md-0">
                        <div className="card">
                            <img
                                src="assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h6 className="text-uppercase text-muted">
                                    AI
                                </h6>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
                    <div className="mt-4">
                        <a
                            className="btn btn-outline-dark rounded-1"
                            href="#call-now"
                        >
                            Read more articles
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}