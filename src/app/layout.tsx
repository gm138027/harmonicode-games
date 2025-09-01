import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://harmonicodegames.com'),
  title: 'HarmoniCode Games | Free Online Piano Games & Music Learning',
  description: 'Play interactive piano games online at HarmoniCode Games. Learn music through fun gaming experience - we focus on music education, not sports-related content.',
  keywords: ['harmonicode games', 'online piano games', 'harmonicode video games', 'music games', 'rhythm games', 'interactive music', 'piano games'],
  icons: {
    icon: [
      { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo/favicon.ico',
    apple: '/logo/apple-touch-icon.png',
  },
  manifest: '/logo/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* 导航栏 */}
        <header>
          <div className="container">
            <nav className="nav-container">
              <div className="nav-brand">
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img
                    src="/LOGO.png" 
                    alt="HarmoniCode Games Logo" 
                    width={40} 
                    height={40} 
                    className="logo-image"
                  />
                  <span>HarmoniCode Games</span>
                </Link>
              </div>
              <ul className="nav-links">
                <li><Link href="/#home">Home</Link></li>
                <li><Link href="/play">Play Midiano</Link></li>
                <li><Link href="/#about">About</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* 页脚 */}
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} HarmoniCode Games. All rights reserved.</p>
            <p className="mb-4">Experience the perfect blend of music and gaming.</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--apple-gray-500)' }}>
              Midiano is developed and maintained by <a 
                href="https://midiano.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--apple-blue)', textDecoration: 'none' }}
              >
                Midiano.com
              </a>
            </p>
            <p className="mb-4">
              <Link href="/privacy" style={{ marginRight: '1rem', color: 'var(--apple-blue)' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: 'var(--apple-blue)' }}>Terms of Service</Link>
            </p>
          </div>
        </footer>

        {/* Google Analytics 代码开始 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TS21E32FST"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TS21E32FST');
          `}
        </Script>
        {/* Google Analytics 代码结束 */}
      </body>
    </html>
  );
}