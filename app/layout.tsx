import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/hero.mobile.css";
import "@/styles/capabilities.mobile.css";
import "@/styles/sectors.mobile.css";
import "@/styles/fieDash.mobile.css";
import "@/styles/benefits.mobile.css";
import "@/styles/navbar.mobile.css";


export const metadata: Metadata = {
  title: "Ottonomi AI",
  description:
      "Transform traffic data into autonomous insights and real-time control for smarter, safer cities with Ottonomi AI.",
  icons: {
    icon: "/favicon.png",     // or /favicon.ico
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        {/* Analytics component removed */}
      </body>
    </html>
  )
}
