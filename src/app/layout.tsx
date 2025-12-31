import type { Metadata } from "next";
import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";

const kantumruyPro = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["latin", "khmer"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Save Luy",
  description: "Financial management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kantumruyPro.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
