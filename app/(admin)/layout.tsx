// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import type { Metadata } from "next";
// import { DM_Sans } from "next/font/google";
// import "./globals.css";

// const dmSans = DM_Sans({
//   subsets: ["latin"],
// });


// export const metadata: Metadata = {
//   title: "Sacrament Meeting Planner",
//   description: "Plan, organize, and view sacrament meeting details",
// };

// const today = new Date().toISOString().split("T")[0];

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html lang="en">
//       <body className={dmSans.className}>
//         <Header today={today}/>
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

// admin layout here

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
