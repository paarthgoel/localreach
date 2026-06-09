import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LocalReach — Reach Every Neighborhood on the Internet',
  description: 'LocalReach helps you reach every neighborhood on the internet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
