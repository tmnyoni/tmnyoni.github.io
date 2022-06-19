import React from 'react'

export default function About() {
    return (
        <div className="moreOfme py-5">
            <div className="container">
                <div className="row flex-row-reverse py-3 py-sm-4 py-lg-5 align-items-start">
                    <div className="col-12 col-lg-6 ps-lg-5 px-4">
                        <h6 className="fw-bold text-uppercase section-heading">
                            About me
                        </h6>
                        <h2>
                            Hello there, I am Tawanda M.
                        </h2>
                        <p className="display-6 mb-4">
                            A young Zimbabwean IT enthusiast based in Bulawayo.
                        </p>
                        <p>
                            I am a highly motivated IT enthusiast prepared to offer everything I have to any venture. My
                            main area of expertise is web development. But I'm not only a web developer; on occasion, I
                            also make desktop and mobile applications. Creativity and innovation are important to me.

                            <br />
                            <br />

                            My life goal is to use technology to improve the human society. So I spend the most of my
                            time studying about new technology on the market and how they may benefit human
                            civilization.

                            <br />
                            <br />

                            In my leisure time, I enjoy learning new programming techniques as well as enjoying video
                            games.
                            Which is what I usually do when I'm bored. I enjoy open-world computer games such as COD and
                            others. COD is my favorite game.
                        </p>

                        <a
                            href="#about-me"
                            className="btn btn-outline-dark px-4 mt-3 rounded-1"
                        >
                            More about me
                        </a>

                    </div>
                    <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                        <div>
                            <img
                                src="assets/images/pakata-goh-EJMTKCZ00I0-unsplash.jpg"
                                className="img-fluid rounded-3 "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};