import Header from "@/components/layout/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer";
import Main from "@/components/main";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thỏ Comic",
  description: "Trang web truyện tranh manga, anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Header />
        <Main>{children}</Main>
        <Footer />
        </Provider>
      </body>
    </html>
  );
}
