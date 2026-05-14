import type { Metadata } from "next";
import "./globals.css";

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
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
