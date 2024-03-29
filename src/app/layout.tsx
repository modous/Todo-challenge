import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import classnames from "classnames";
import styles from "./index.module.css";

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
      <body className={classnames(styles.body, inter.className)}>
        {children}
      </body>
    </html>
  );
}
