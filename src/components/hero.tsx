import React, { useEffect, useRef } from "react";
import typingEffect from "typing-effect";
import styles from "../styles/hero.module.css";

export default function Hero() {
    const greetingMessageRef = useRef(null);
    const heroRef = useRef(null);
    /**
     * This will trigger the typing effect
     * soon after the component has rendered.
     * 
     * Todo: Typing refreshed and types other things.
     */
    useEffect(() => {
        typingEffect(
            greetingMessageRef.current,
            {
                speed: 100,
                delay: 30,
                reset: false
            }
        )

    }, []);


    return (
        <div className={styles.heroSection} ref={heroRef}>
            <div className="container">
                <div className="px-4 my-5">
                    <div className="row flex-lg-row-reverse align-items-center">
                        <div className="col-12 col-sm-12 col-lg-6">
                            <div className="position-relative">
                                <img
                                    src="assets/hero.png"
                                    className={`${styles.heroImage} img-fluid mx-lg-auto my-5 my-md-auto`}
                                    alt="hero"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <p
                                className={styles.greetingMessage}
                                ref={greetingMessageRef}
                            >
                                Hi There! I am Tawanda M.
                            </p>
                            <h1 className={styles.heading}>
                                I'm a freelancer,
                                <br />
                                Web developer
                                <br />
                            </h1>
                            <p className={styles.lead}>
                                I craft <strong className="text-danger"> high-quality </strong>, 
                                beautiful websites that are brand-accurate, user-friendly
                                and well-designed to stand for your presence on the internet.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-5">
                                <a
                                    type="button"
                                    className={`${styles.ctaBtn}`}
                                    href="/contact"
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

