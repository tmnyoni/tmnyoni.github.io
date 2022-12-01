import "./globals.css"
import Navbar from "../pages/components/navbar";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html>
            <head />
            <body className="m-0 p-0">
                <main className="mx-4 md:mx-auto md:w-10/12 lg:w-8/12">
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}
