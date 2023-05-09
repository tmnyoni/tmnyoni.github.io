import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
// import { Inter } from "next/font/google";
import clsx from "clsx";

interface RootLayoutProps {
    children: React.ReactNode;
}

// const inter = Inter({
//     subsets: ["latin"],
//     variable: "--font-inter",
// });

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html lang="en">
            <head />
            <body className={clsx("font-sans text-gray-900 bg-gray-50")}>
                <main className="flex flex-col justify-center relative">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
