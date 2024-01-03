import { Gabarito, Inter } from 'next/font/google'
import './globals.css'
import InputSearch from '@/utilities/Navbar/InputSearch'
import Link from 'next/link'
import AuthButton from '@/utilities/Navbar/AuthButton'

const inter = Inter({ subsets: ['latin'] })
const gabrarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={gabrarito.className}>
                <div className="bg-color-accent p-3 w-full">
                    <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 mx-3">
                    <Link href="/" className="font-bold text-2xl text-slate-700">CUYANIMELIST</Link>
                        <InputSearch />
                        <AuthButton/>
                    </div>
                </div>
                {children}
            </body>
        </html>
    )
}
