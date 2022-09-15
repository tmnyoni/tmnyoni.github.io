import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="py-6">
            <div className="container m-auto">
                <div className="flex items-center justify-between">
                    <div></div>
                    <div className="border shadow-md rounded-full px-4 py-2 font-semibold text-xs">
                        <Link href={"about"}>
                            <a className="px-4 py-2">
                                About
                            </a>
                        </Link>
                        <Link href={"projects"}>
                            <a className="px-4 py-2">
                                Projects
                            </a>
                        </Link>
                        <Link href={"articles"}>
                            <a className="px-4 py-2">
                                Articles
                            </a>
                        </Link>
                        <Link href={"skills"}>
                            <a className="px-4 py-2">
                                Skills
                            </a>
                        </Link>
                    </div>
                    <div className="right-0">
                        <Link href="contact">
                            <a className="py-2 px-4 border shadow-sm  rounded-full text-xs font-semibold">
                                Contact me
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;