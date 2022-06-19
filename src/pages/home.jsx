import React from "react";
import { CallToAction, Hero, Product, WorkProcess } from "../components";
import Tools from "../components/tools";

export default function Home() {
    return (
        <div>
            <Hero />
            <Product />
            <Tools /> {/* !Todo: remove this */}
            <WorkProcess />
            <CallToAction />
        </div>
    )
}