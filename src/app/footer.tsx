import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-10 px-2 py-6 border-t">
      <div className="flex items-center justify-between">
        <div className="hidden px-2 py-2 text-sm font-medium md:block">
          <Link href="about" className="px-4 py-2">
            About
          </Link>
          <Link href="projects" className="px-4 py-2">
            Projects
          </Link>
          <Link href="articles" className="px-4 py-2">
            Articles
          </Link>
          <Link href="skills" className="px-4 py-2">
            Skills
          </Link>
        </div>
        <p className="text-xs">(C) All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
