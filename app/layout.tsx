import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Modules/NavBar'
import Footer from '@/components/Modules/Footer'
import Provider from '@/components/Providers/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techops',
  description: 'Techops is a community of tech enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen mx-auto justify-center items-center  flex flex-col bg-white 
          dark:bg-gray-900">
        <Provider>
          <Navbar />
          <main className="flex flex-col flex-1 max-w-6xl w-full  ">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
