import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | HarmoniCode Games',
  description: 'Read the Terms of Service for HarmoniCode Games. Using this site constitutes acceptance of these terms and policies.',
}

export default function TermsOfServicePage() {
  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      {/* 面包屑导航 */}
      <nav style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>
        <Link 
          href="/" 
          style={{ 
            color: 'var(--apple-blue)', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← Back to Home
        </Link>
      </nav>

      <h1 className="section-title" style={{ marginBottom: '1rem' }}>Terms of Service</h1>
      <p className="mb-8" style={{ color: '#636366' }}>Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Acceptance of Terms</h2>
        <p>
          By accessing or using HarmoniCode Games, you agree to be bound by these Terms. If you do not agree, please discontinue use of the site.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Use of the Service</h2>
        <p className="mb-2">You agree to use the Service only for lawful purposes and in accordance with these Terms. Prohibited activities include:</p>
        <ul>
          <li>Attempting to interfere with the operation or security of the site</li>
          <li>Reverse engineering or unauthorized scraping of content</li>
          <li>Infringing intellectual property or privacy rights</li>
        </ul>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Intellectual Property</h2>
        <p>
          All trademarks, logos, and content displayed on the site are the property of their respective owners and protected by applicable laws.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Analytics</h2>
        <p>
          We use Google Analytics to understand how users interact with our site. Data is collected and processed according to our Privacy Policy.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Third-Party Links</h2>
        <p>
          The site may contain links to third-party sites. We are not responsible for their content or practices.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Disclaimer of Warranties</h2>
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind, express or implied.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, HarmoniCode Games shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be indicated by updating the "Last updated" date at the top of this page.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Contact</h2>
        <p>
          If you have questions about these Terms, please contact us at: support@harmonicodegames.com
        </p>
      </div>
    </div>
  )
} 