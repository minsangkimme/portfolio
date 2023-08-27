import type { Metadata } from 'next'
import './globals.css';
export const metadata: Metadata = {
  title: 'Frontend Dev, Loren Lee',
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
    </head>
      <body>{children}</body>
    </html>
  )
}
