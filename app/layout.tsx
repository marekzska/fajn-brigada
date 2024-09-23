import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fajn Brigáda",
  description: "Fajn Brigáda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.embeddedChatbotConfig = {
              chatbotId: "qaebUnWAF_Kd3VlcgQ_Cr",
              domain: "www.chatbase.co"
            };
          `,
        }}
      />
      <Script
        src={`https://www.chatbase.co/embed.min.js?chatbotId=qaebUnWAF_Kd3VlcgQ_Cr&domain=www.chatbase.co`}
        defer
      />

      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
