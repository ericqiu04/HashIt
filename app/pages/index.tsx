import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import AuthButton from '@/components/auth-button'
import Header from '@/components/app-header'
import Footer from '@/components/app-footer'

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col gap-20 items-center h-screen">
      <nav className="w-full flex justify-center border-b h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20">
        <Header />
        <main className="flex-1 flex flex-col">
        </main>
      </div>

      <Footer />
    </main>
  )
}
