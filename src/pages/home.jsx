import React from "react";
import { CallToAction, Hero, Services, WorkProcess } from "../components";

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <WorkProcess />
            <CallToAction />
        </div>
    )
}