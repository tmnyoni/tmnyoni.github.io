import React from "react";
import Link from "next/link";
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export interface ISocialNetwork {
  name: string;
  link: string;
  icon: () => React.ReactElement;
}

export const SOCIAL_NETWORKS: ISocialNetwork[] = [
  {
    name: "github",
    link: "https://github.com/tmnyoni",
    icon: GitHubIcon,
  },
  {
    name: "linkedin",
    link: "https://linkedin/in/tmnyoni",
    icon: LinkedInIcon,
  },
  {
    name: "website",
    link: "'mailto:tmnyoni@outlook.com'",
    icon: EmailIcon,
  },
];

export default function SocialNetworks() {
  return (
    <React.Fragment>
      {SOCIAL_NETWORKS.map((socialNetwork, index) => (
        <Link
          href={socialNetwork.link}
          key={index}
          className="ml-3 flex h-10 w-10 items-center justify-center p-1 text-gray-600"
        >
          <socialNetwork.icon />
        </Link>
      ))}
    </React.Fragment>
  );
}

export function GitHubIcon() {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="inline h-6 w-6 rounded"
    >
      <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      width="32px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline h-10 w-20 rounded"
    >
      <path
        d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17V13.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.01L7.01 6.99889"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailIcon() {
  return <EnvelopeIcon className="inline h-10 w-10" />;
}
