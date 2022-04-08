import React from "react";

export default function ServiceSection() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <h2 className="text-center mb-5">
                You don't simply need a website;
                <div>you need a high-quality website.</div>
            </h2>

            <div className="row justify-content-betweeen p-3" >
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div>
                        <img
                            src="assets/1.png"
                            alt="number-1"
                            className="img-fluid"
                        />
                    </div>

                    <div className="ms-1">
                        <h5> A looking good website </h5>
                        <p>
                            A well-thought-out design will portray you as the
                            expert and authority you know you
                            are, instilling trust in your visitors.
                        </p>
                    </div>
                </div>


                <div className="col">
                </div>
            </div>

            <div className="row justify-content-betweeen p-3" >
                <div className="col">
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div>
                        <img
                            src="assets/2.png"
                            alt="number-2"
                            className="img-fluid"
                        />
                    </div>

                    <div className="ms-1">
                        <h5>A 27/4 website </h5>
                        <p>
                            A well-designed website with few faults  that disrupt
                            your presence on the internet, hurting your market.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-betweeen p-3" >
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div>
                        <img
                            src="assets/3.png"
                            alt="number-3"
                            className="img-fluid"
                        />
                    </div>

                    <div className="ms-1">
                        <h5> Let your clients find you </h5>
                        <p>
                            Remember that your internet presence is important,
                            so make it easy for your clients to identify you.
                        </p>
                    </div>
                </div>


                <div className="col">
                </div>
            </div>
        </div>
    )
}