import type { Metadata } from 'next'
import './globals.css';
export const metadata: Metadata = {
  title: 'Frontend developer',
  description: "Loren Lee's personal site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel={"stylesheet"} href={"/css/font.css"}></link>
      <link rel={"icon"} href={"/image/favicon/favicon.ico"}></link>
    </head>
      <body>{children}</body>
    </html>
  )
}
