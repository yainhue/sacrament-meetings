import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Plan, organize, and view sacrament meeting details",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className='Inter'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
