import React from "react";
import Link from "next/link"
import { BugAntIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/outline"

export type SocialNetwork = {
    name: string;
    link: string;
    icon: JSX.Element;
}

export const SOCIAL_NETWORKS: SocialNetwork[] = [
    {
        name: "github",
        link: "https://github.com/tmnyoni",
        icon: <ChatBubbleBottomCenterTextIcon className="inline h-6 w-6" />
    },
    {
        name: "linkedin",
        link: "https://linkedin/in/tmnyoni",
        icon: <BugAntIcon className="inline h-6 w-6" />
    },
    {
        name: "website",
        link: "https://tmnyoni.ml",
        icon: <GlobeAltIcon className="inline h-6 w-6" />
    }
]

const SocialNetworks = (): JSX.Element => {
    return (
        <React.Fragment>
            {SOCIAL_NETWORKS.map((socialNetwork, index) =>
                <Link href={socialNetwork.link} key={index}>
                    <a className="ml-3 flex h-8 w-8 items-center justify-center p-1 text-gray-600">
                        {socialNetwork.icon}
                    </a>
                </Link>
            )}
        </React.Fragment >
    )
}

export default SocialNetworks;