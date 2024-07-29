import { Inter, Mulish, Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Providers } from "./providers";
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

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
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
        className={`${inter.className} ${mulish.variable} ${poppins.variable} ${recoleta.variable} ${roboto.variable}`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
