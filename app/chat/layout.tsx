import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
    title: "EcoTrace | Chat",
    description: "Chat with the EcoTrace AI Chatbot.",
}

export default function ChatLayout({
    children, 
}: Readonly <{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange>
                    <Sidebar />
                    <main className='mx-5 mt-16 sm:ml-[300px] sm:mt-3'>{children}</main>
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}