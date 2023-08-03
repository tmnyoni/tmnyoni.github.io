import Link from "next/link";
import NavDock from "./dock";


export default function MainNav() {
    return (
        <div className="fixed mx-auto left-0 right-0 w-3/12 bottom-12 transform inline">
            <NavDock />
        </div>
    )
}
