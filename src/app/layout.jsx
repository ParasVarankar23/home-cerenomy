import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Gruha Pravesh | Aditya Chauhan & Family",
  description:
    "Join Aditya Chauhan & Family in celebrating their auspicious Gruha Pravesh on 25th & 26th November 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}