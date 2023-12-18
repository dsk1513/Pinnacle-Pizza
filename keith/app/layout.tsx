import React from 'react';
import "@/styles/globals.css";
import { Metadata } from "next"; // Ensure this is correctly imported
import { siteConfig } from "@/config/site"; // Verify these paths
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Header from "@/components/Header"; // Verify the path
import Hero from '@/components/Hero';
import clsx from "clsx";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

// Assuming Metadata type is correctly defined
export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        
        <html lang="en" suppressHydrationWarning>
            <head />
            <GoogleAnalytics GA_MEASUREMENT_ID='G-84Y9RYT77F'/>
         
            <body className={clsx("min-h-screen bg-black font-sans antialiased", fontSans.variable)}>
                
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <Hero/>
                        {/* Adjusted for full width and no horizontal padding */}
                        <main className="flex-grow w-full">
                            {children}
                            <CookieBanner/>
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
