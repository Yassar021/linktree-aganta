import Providers from './Providers'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>  
      </body>
    </html>
  )
}
