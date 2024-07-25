import { Inter, Mulish, Poppins } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
const recoleta = localFont({
  src: [
    {
      path: "../public/fonts/recoleta.woff",
      weight: "400",
    },
  ],
  variable: "--font-recoleta",
});

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mulish",
});

export const metadata = {
  title: "Splenify",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${mulish.variable} ${poppins.variable} ${recoleta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
