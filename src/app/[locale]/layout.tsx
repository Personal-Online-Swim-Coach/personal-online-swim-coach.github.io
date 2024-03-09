import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import "../../i18n";

const inter = Figtree({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Personal Online Swim Coach",
  description: "",
};

function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}

export default RootLayout;