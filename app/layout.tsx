import type { Metadata } from "next";
import BackToTopButton from "@/app/components/home/BackToTopButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "باشگاه فرهنگی ورزشی پرسپولیس",
  description: "باشگاه پرسپولیس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
