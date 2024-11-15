import localFont from "next/font/local";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rotorua Architects - Apa Architects & Projects Managers",
  description: "Rotorua Architects - Apa Architects & Projects Managers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
