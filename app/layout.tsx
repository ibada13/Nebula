import type { Metadata } from "next";
import { Cairo} from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "MonsterCat",
  description: "use nextts and tailwind to build this front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
