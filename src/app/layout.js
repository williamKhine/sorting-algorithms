import "./globals.css";

import Header from "@/app/_components/header";
import ControlBar from "@/app/_components/control-bar";

export const metadata = {
    title: "Sorting Algorithm Visualizer | khine.dev",
    description: "Visualize sorting algorithms in real time developed by William Khine.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={'bg-background bg-gradient-to-b from-background to-secondary'}>
        <body className={'font-body text-text flex flex-col h-dvh overflow-hidden'}>
            <Header />
            {children}
            <ControlBar />
        </body>
        </html>
    );
}
