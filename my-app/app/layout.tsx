import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/parts/navnbar";
import Footer from "@/components/parts/footer";


export const metadata: Metadata = {
  title: "Deer Ridge Nails Spa | Kitchener, Ontario",
  description: "Premium nail care and spa services in Kitchener, Ontario. Manicures, pedicures, gel extensions, and spa treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`bg-white text-gray-900 antialiased`}
        suppressHydrationWarning
      >
     <Navbar />
    {children}
    <Footer />
      </body>
    </html>
  );
}
