import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

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
      <body className={styles.body}>{children}</body>
    </html>
  );
}
