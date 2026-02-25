import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "2026 India-Korea Yashobhoomi Global Business Summit",
  description:
    "The premier India-Korea business summit connecting leaders across AI, Semiconductor, Bio-Healthcare, Energy, Fleet & Defense sectors. April 27-29, 2026 at Yashobhoomi (IICC), New Delhi.",
  keywords: [
    "India Korea Summit",
    "Yashobhoomi",
    "IICC",
    "Business Summit",
    "AI FUTURE",
    "ZEE TV",
    "India Korea Trade",
    "Global Business Summit 2026",
  ],
  openGraph: {
    title: "2026 India-Korea Yashobhoomi Global Business Summit",
    description:
      "The premier India-Korea business summit. April 27-29, 2026 at Yashobhoomi, New Delhi.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
