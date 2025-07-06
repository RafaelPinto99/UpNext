import type { Metadata } from "next";
import "./global.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "UpNext",
  description:
    "Track jobs/companies that you want to send your resume to or that you have already sent to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
