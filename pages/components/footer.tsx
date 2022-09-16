import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-10">
            <div className="container mx-auto border-t">
                <div className="mx-10 px-2 py-6">
                    <div className="flex items-center justify-between">
                        <div className=" px-2 py-2 font-semibold text-xs hidden md:block">
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
                        <div>
                            <p className="text-xs">
                                @2022 Tawanda M. Nyoni. All rights are reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;