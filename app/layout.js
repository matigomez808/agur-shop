
import { Montserrat } from 'next/font/google'
import Navbar from '@Components/Navbar'
import Footer from '@Components/Footer'
import Container from '@Components/Container'
import './styles/globals.css'
import styles from '@Styles/page.module.css'

const montserrat = Montserrat({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="ES">
      <body className={montserrat.className}>
        <Navbar />
        <Container> 
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}
