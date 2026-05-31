import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/amiri/400.css";
import "@fontsource/reem-kufi/400.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Undangan Pernikahan | ❤ & ❤ – Islamic Wedding Invitation",
  description: "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.",
  openGraph: {
    title: "Undangan Pernikahan | ❤ & ❤",
    description: "Islamic Wedding Invitation — Dengan memohon rahmat Allah SWT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen islamic-pattern">{children}</body>
    </html>
  );
}
