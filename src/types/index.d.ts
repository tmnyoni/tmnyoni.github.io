import { LucideIcon } from "lucide-react";

export type SiteConfig = {
    name: string,
    description: string,
    url: string,
}

export type DockItem = {
    label: string;
    href: string;
    icon: LucideIcon
}