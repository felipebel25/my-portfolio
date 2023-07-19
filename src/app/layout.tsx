"use client";
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Inter } from 'next/font/google'
import { darkTheme } from '@/components/theme/darkTheme'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Felipe Medina | Frontend Dev</title>
        <meta name="author" content="Felipe Medina" />
        <meta name="description" content="Felipe Medina Front-End Developer with over two years of experience in JavaScript, TypeScript, Next.js, Material-UI, and similar technologies. Showcasing my work and projects in my personal portfolio." />
        <meta name="keywords" content="Front-End Developer, JavaScript, TypeScript, Next.js, Material-UI, Portfolio, Projects, HTML, CSS,NextJs" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />

        <meta property="og:title" content="Felipe Medina - Front-End Developer" />
        <meta property="og:description" content="Front-End Developer with over two years of experience in JavaScript, TypeScript, Next.js, Material-UI, and similar technologies. Showcasing my work and projects in my personal portfolio." />
        <meta property="og:image" content="https://i.ibb.co/vqVpMqY/Captura-desde-2023-07-19-00-42-59.png" />
        <meta property="og:url" content="https://www.felipemedina.site/" />

      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
