import "./globals.css"
import Navbar from "../pages/components/navbar";
import { Inter } from "@next/font/google";

interface RootLayoutProps {
    children: React.ReactNode;
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html className={`${inter.variable} font-sans`}>
            <head />
            <body>
                <main className="mx-4 md:mx-auto md:w-10/12 lg:w-8/12">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}
