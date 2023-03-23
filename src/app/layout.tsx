import 'tailwindcss/tailwind.css'
import '../components/global/global.css'

import Script from 'next/script'
import ArrowPointer from 'src/components/global/Cursor'

export const metadata = {
  title: 'influxed',
  description: 'influxed by Jordon Nichols',
  icons: {},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
      <body className="cursor-">
        <ArrowPointer />
        <main>{children}</main>
      </body>
    </html>
  )
}
