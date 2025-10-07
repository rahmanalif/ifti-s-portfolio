// layout.jsx (server component)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Mehidi Hasan Ifti - Business Strategist & Entrepreneur",
  description: "Business strategist and entrepreneur based in Dhaka, Bangladesh. Specializing in market strategy, startup mentorship, and sustainable business growth.",
  keywords: ["Business Strategist", "Entrepreneur", "Startup Mentor", "Bangladesh", "Business Consulting", "Market Strategy"],
  authors: [{ name: "Mehidi Hasan Ifti" }],
  openGraph: {
    title: "Mehidi Hasan Ifti - Business Strategist & Entrepreneur",
    description: "Business strategist and entrepreneur based in Dhaka, Bangladesh",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}