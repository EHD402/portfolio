import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const primaryFont = localFont({
  src: "../public/fonts/GeneralSans-Semibold.woff2",
  variable: "--font-primary"
})

const secondaryFont = localFont({
  src: "../public/fonts/GeneralSans-Regular.woff2",
  variable: "--font-secondary"
})

export const metadata: Metadata = {
  title: "E.HEDLUND",
  description: "Portfolio for Erik Hedlund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
