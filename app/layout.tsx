import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // 🔴 REQUIRED

  title: {
    default: "Aditya Giri | Data Analyst & Machine Learning Engineer",
    template: "%s | Aditya Giri",
  },

  description:
    "Portfolio of Aditya Giri — Data Analyst, Machine Learning & NLP Enthusiast. Projects in NLP, recommender systems, data analytics, Apache Kafka, and Power BI.",

  keywords: [
    "Aditya Giri",
    "Data Analyst",
    "Machine Learning Engineer",
    "NLP",
    "Data Science",
    "Apache Kafka",
    "Power BI",
    "Python",
    "Portfolio",
  ],

  authors: [{ name: "Aditya Giri" }],
  creator: "Aditya Giri",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "http://localhost:3000",
    title: "Aditya Giri | Data Analyst & ML Engineer",
    description:
      "Data Analyst and Machine Learning Engineer with experience in NLP, recommender systems, and data-driven applications.",
    siteName: "Aditya Giri Portfolio",
    images: [
      {
        url: "/profile.jpg", // ✅ car image
        width: 1200,
        height: 630,
        alt: "Aditya Giri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aditya Giri | Data Analyst & ML Engineer",
    description:
      "Portfolio of Aditya Giri — Data Analyst, Machine Learning & NLP Enthusiast.",
    images: ["/profile.jpg"],
  },

 
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
