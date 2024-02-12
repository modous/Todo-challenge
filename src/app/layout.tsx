import type { Metadata } from "next";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Make a Todo application in nextjs",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      {children}
    </body>
  </html>
  );
}

