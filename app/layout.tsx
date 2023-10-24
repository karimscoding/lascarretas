import Navbar from "@/components/Navbar";
import Notice from "@/components/Notice";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Las Carretas Mexican Restaurants - Kuala Lumpur, Ampang, Subang Jaya, Taipan, Damansara, Malaysia",
  description:
    "Las Carretas stands for The Wagon in Spanish. We serve great Mexican Food with a good selection of Steaks, Ribs, Stews and Seafood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Notice />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
