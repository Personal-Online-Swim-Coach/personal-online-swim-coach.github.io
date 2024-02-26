import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import "./locales/i18n";

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
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}

export default RootLayout;