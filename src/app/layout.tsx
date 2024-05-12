import type { Metadata } from 'next'
import { Rubik } from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'Travellian',
  description: 'Solving all your travel needs',
}

const rubik = Rubik({subsets: ["latin"], weight: ["300" , "400" , "500" , "600" , "700" , "800" , "900"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={rubik.className} >{children}</body>
    </html>
  )
}
