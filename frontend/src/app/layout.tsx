import type { Metadata } from "next"
import { Inter, Roboto_Flex } from "next/font/google"
import "./globals.css"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto_Flex({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PFÜV",
  description: "Pferdischer Überprüfungsverband",
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" >
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout