import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ContactBar from "./components/contactbar";
import Temp from "./components/temp-page";

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
        <div className="hidden md:block">
          <Navbar />
          {children}
          <ContactBar />
        </div>
        <div className="block md:hidden">
          <Temp />
          
        </div>
        
      </body>
    </html>
  );
}

export default RootLayout;