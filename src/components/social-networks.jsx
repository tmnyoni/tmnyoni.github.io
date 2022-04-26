import React from "react";

import {
    Github,
    Linkedin,
    Whatsapp
} from "react-bootstrap-icons";


export default function SocialMedia() {
    return (
        <div className="social-media d-flex justify-content-around">
            <a
                href="https://www.linkedin.com/in/tmnyoni/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <Linkedin width={"1.5rem"} height="1.5rem" />
            </a>

            <a
                href="https://github.com/tmnyoni"
                className=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github width={"1.5rem"} height="1.5rem" />
            </a>

            <a
                href="mailto:tmnyoni@outlook.com"
                className=""
                target="_blank"
                rel="noopener noreferrer"
            >
                <Whatsapp width={"1.5rem"} height="1.5rem" />
            </a>
        </div>
    )
}
