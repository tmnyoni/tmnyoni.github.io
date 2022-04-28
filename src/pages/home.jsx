import React from "react";
import { CallToAction, Hero, Services, WorkProcess } from "../components";
import Tools from "../components/tools";

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <Tools /> {/* !Todo: remove this */}
            <WorkProcess />
            <CallToAction />
        </div>
    )
}