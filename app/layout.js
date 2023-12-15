import { Montserrat } from 'next/font/google'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './globals.css'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Agur Shop',
  description: 'Shop online de Agur lenceria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
