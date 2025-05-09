import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://harmonicodegames.com'),
  title: 'HarmoniCode Games | Interactive Music Gaming',
  description: 'Experience the fusion of music and gaming with HarmoniCode Games, featuring interactive rhythm-based games for all skill levels.',
  keywords: ['harmonicode games', 'music games', 'rhythm games', 'interactive music', 'piano games'],
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
                <li><Link href="/#play">Play Midiano</Link></li>
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
          </div>
        </footer>
      </body>
    </html>
  );
}