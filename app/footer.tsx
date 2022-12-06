import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-10">
            <div className="container mx-auto">
                <div className="px-2 py-6 border-t">
                    <div className="flex items-center justify-between">
                        <div className=" hidden px-2 py-2 text-sm font-medium md:block">
                            <Link href={"about"} className="px-4 py-2">
                                About
                            </Link>
                            <Link href={"projects"} className="px-4 py-2">
                                Projects
                            </Link>
                            <Link href={"articles"} className="px-4 py-2">
                                Articles
                            </Link>
                            <Link href={"skills"} className="px-4 py-2">
                                Skills
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
    );
};

export default Footer;
