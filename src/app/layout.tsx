import 'tailwindcss/tailwind.css'
import './(GLOBALS)/global.css'

import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Footer from 'src/app/(GLOBALS)/components/layout/Footer'

export const metadata = {
  title: 'Jordon N. | INFLUXED',
  description:
    'Delve into a comprehensive collection of reports, studies and posts. Featuring expert opinions, best practices and the best cybersec information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
      <head>
        <Script
          src="https://kit.fontawesome.com/cc6c58e096.js"
          crossOrigin="anonymous"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon/128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/icon.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
