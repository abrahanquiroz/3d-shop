import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Footer from "@/components/Footer";
import { Providers } from "./Providers"; // import the Providers component


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MobNavbar from "@/components/MobNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3D Models Shop",
  description: "3D Models Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('holahgola');
  console.log(process.env.GOOGLE_CLIENT_ID); 
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <Providers>
        <HeaderMain />
        </Providers>
        {children}
        </body>
        <Footer />
    </html>
  );
}
