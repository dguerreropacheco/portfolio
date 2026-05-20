import type { Metadata } from "next";
import "./globals.css";
import { baskerville, bricolage } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Diana Guerrero | Full Stack Developer",
  description: "My Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${baskerville.variable} ${bricolage.variable}`}>
      <body>{children}</body>
    </html>
  );
}
