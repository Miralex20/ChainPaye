import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navigation from "@/sections/Navbar";
import ScrollContext from "@/components/providers/scrollcontext";
// import Footer from "@/sections/Footer";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "ChainPaye - Global Money Transfers Made Easy",
  description:
    "A seamless platform to send and receive money worldwide - instantly on WhatsApp.",
};
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${manrope} antialiased bg-background`}>
        <ScrollContext>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="w-full bg-background overflow-x-hidden">
              <div className="">
                <Navigation />
                {children}
                {/* <Footer /> */}
              </div>
            </main>
          </ThemeProvider>
        </ScrollContext>
      </body>
    </html>
  );
}
