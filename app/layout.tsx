import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components"
import { Providers } from './providers'
import { fonts } from './fonts'
import React from "react"

export const metadata: Metadata = {
  title: "PFÜF",
  description: "Pferdischer Überprüfungsverband",
}

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
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

export default RootLayout