import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>조성주의 포트폴리오</title>
      <body className="bg-black-001 font-default">{children}</body>
    </html>
  );
}
