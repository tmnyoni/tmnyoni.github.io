import React, { useEffect, useRef } from "react";
import typingEffect from "typing-effect";
import styles from "../styles/styles.module.css";

export default function Hero() {
    const salutationMsg = useRef();

    /**
     * This will trigger the typing effect
     * soon after the component has rendered.
     * 
     * Todo: Typing refreshed and types other things.
     */
    useEffect(() => {
        typingEffect(
            salutationMsg.current,
            {
                speed: 100,
                delay: 30,
                reset: false
            }
        )
    }, []);

    return (
        <div className={styles.heroSection}>
            <div className="container">
                <div className=" col-xxl-8 px-4 my-5">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-12 col-sm-12 col-lg-5">
                            <div className="position-relative">
                                <img
                                    src="assets/hero.png"
                                    className={`${styles.heroImage} img-fluid mx-lg-auto my-5 my-md-auto`}
                                    alt="hero"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <h5 className="text-secondary" ref={salutationMsg}>
                                Hi There! My name is Tawanda M.
                            </h5>
                            <h1 className="display-5 fw-bolder lh-1 mb-3">
                                I'm a freelancer, <br />
                                Web developer <br />
                            </h1>
                            <p className={styles.lead}>
                                I craft high-quality, beautiful websites that are brand-accurate, user-friendly
                                and well-designed to stand for your presence on the internet.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                                <a
                                    type="button"
                                    className={`btn ${styles.ctaBtn}`}
                                    href="#"
                                >
                                    Lets build your website together
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

