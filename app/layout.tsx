
import './globals.css'

export const metadata = {
  title: 'Smart Credit Flow',
  description: 'Offline fintech app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
