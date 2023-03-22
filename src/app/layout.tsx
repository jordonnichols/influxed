import 'tailwindcss/tailwind.css'
import '../components/global/global.css'

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
        <main>{children}</main>
      </body>
    </html>
  )
}
