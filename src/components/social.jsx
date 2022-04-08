import React from "react";

import {
    Github,
    Linkedin,
    Whatsapp
} from "react-bootstrap-icons";


export default function SocialMedia() {
    return (
        <div className="social-media d-flex justify-content-around">
            <a href="#">
                <Linkedin width={"1.5rem"} height="1.5rem" />
            </a>

            <a href="github.com/tmnyoni" className="">
                <Github width={"1.5rem"} height="1.5rem" />
            </a>

            <a href="maito:tmnyoni@outlook.com">
                <Whatsapp width={"1.5rem"} height="1.5rem" />
            </a>
        </div>
    )
}
