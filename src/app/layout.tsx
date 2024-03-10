import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ContactBar from "./components/contactbar";

const inter = Figtree({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Personal Online Swim Coach",
  description: "",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className + " text-blue-darkest"}>
        <Navbar />
        {children}
        <ContactBar />
        </body>
    </html>
  );
}

export default RootLayout;