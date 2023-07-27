import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Main from "@/components/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Comic",
  description: "Trang web truyện tranh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
