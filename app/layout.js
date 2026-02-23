import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nihal Mishra | UI/UX Designer & MCA Student',
  description: 'Portfolio of Nihal Mishra - UI/UX Designer and MCA Student specializing in creating intuitive digital experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
