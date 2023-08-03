import { DockItem } from "@/types";
import { Home, User, FolderRoot, PenSquare, MessageCircle, } from "lucide-react"

export const dockItems: DockItem[] = [
    {
        label: "Home",
        href: "/",
        icon: Home
    },
    {
        label: "About Me",
        href: "/about-me",
        icon: User
    },
    {
        label: "Projects",
        href: "/projects",
        icon: FolderRoot
    },
    {
        label: "Blog",
        href: "/blog",
        icon: PenSquare
    },
    {
        label: "Chat Me",
        href: "/chat-me",
        icon: MessageCircle
    }
]