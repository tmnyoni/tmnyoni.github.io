import { SiteConfig } from "@/types"

export const siteConfig: SiteConfig = {
    name: "Tawanda M. Porfolio",
    description: "Tawanda M. Porfolio",
    url: "tmnyoni.ml",
}

export const projects = [
    {
        number: 1,
        title: "The Masterpiece",
        description:
            "Let's talk about the Masterpiece that I created and that masterpiece is the website that you're looking at right now... for sure I outdid myself",
        href: "/",
        status: "In development",
    },
    {
        number: 2,
        title: "Good Habits",
        description:
            "It is a budgeting application. It tracks all your finances and give you insights on how to achieve the most with your money",
        href: "https://app.goodhabits.tmnyoni.site",
        status: "In development",
    },
    {
        number: 3,
        title: "Cognitive Analytica Website",
        description:
            "The other masterpiece is the Cognitive Analytica Website that I designed using Figma and Developed using NextJS a ReactJS framework",
        href: "https://cognitiveanalyticazimbabwe.com",
        status: "In development",
    },
] as const
