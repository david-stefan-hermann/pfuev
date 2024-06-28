import type { Metadata } from "next"
import { Roboto_Flex } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components"

const roboto = Roboto_Flex({ subsets: ["latin"] })

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
      <Navbar />
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
