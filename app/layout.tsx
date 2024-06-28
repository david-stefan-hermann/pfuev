import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components"
import { Providers } from './providers'
import { fonts } from './fonts'

export const metadata: Metadata = {
  title: "PFÜF",
  description: "Pferdischer Überprüfungsverband",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={fonts.roboto.variable}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
