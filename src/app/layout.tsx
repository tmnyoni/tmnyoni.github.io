import clsx from "clsx";
import "@/styles/globals.css"

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    const { children } = props;

    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body
                className={clsx(
                    "bg-white min-h-screen text-gray-900 antialiased",
                    // inter.className
                )}
            >
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                > */}
                    {children}
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
