import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seong Ju Portfolio",
  description: "조성주의 포트폴리오 사이트 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black-001 font-default">{children}</body>
    </html>
  );
}
