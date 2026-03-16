import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Hyderabad: The Rising Hub for Global Capability Centres | PrimeDesk",
  description:
    "Enterprise-grade managed offices for GCCs in Hyderabad. Hitech City, Financial District & Gachibowli. 100–2000 seats. Zero brokerage. Options in 24hrs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${manrope.variable} font-sans bg-[#f7f9fc] antialiased`}>
        {children}
      </body>
    </html>
  );
}
