import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | HarmoniCode Games',
  description: 'Learn how HarmoniCode Games collects, uses, and protects your data. We use Google Analytics to understand site usage and improve the experience.',
}

export default function PrivacyPolicyPage() {
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

      <h1 className="section-title" style={{ marginBottom: '1rem' }}>Privacy Policy</h1>
      <p className="mb-8" style={{ color: '#636366' }}>Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Overview</h2>
        <p>
          HarmoniCode Games respects your privacy. This policy explains what information we collect, how we use it, and your rights.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">What We Collect</h2>
        <p className="mb-2">We collect non-identifying usage data through Google Analytics, such as:</p>
        <ul>
          <li>Page views and navigation paths</li>
          <li>Approximate location (country/region), device, and browser information</li>
          <li>Session duration and engagement events</li>
        </ul>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">How We Use Your Information</h2>
        <p>
          We use the collected data to analyze site performance, improve features and content, and ensure site reliability and security.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Cookies and Tracking</h2>
        <p className="mb-2">We use cookies set by Google Analytics to understand how users interact with our site. You can control cookies via your browser settings.</p>
        <p className="mb-2">To opt out of Google Analytics, you may use browser add-ons provided by Google or enable Do Not Track in supported browsers.</p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Data Sharing</h2>
        <p>
          We do not sell your personal information. We may share aggregated, non-identifying data with service providers strictly to operate and improve our services.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Data Retention</h2>
        <p>
          Analytics data is retained according to Google Analytics settings and is stored only as long as necessary for the purposes described in this policy.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Children's Privacy</h2>
        <p>
          Our services are not directed to children under the age required by applicable law. If you believe we have collected data from a child, please contact us.
        </p>
      </div>

      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h2 className="mb-2">Contact</h2>
        <p>
          If you have questions about this policy or your data rights, please contact us at: support@harmonicodegames.com
        </p>
      </div>

      <p style={{ color: '#8E8E93' }}>
        Note: This page is provided for general transparency. Depending on your jurisdiction, you may have additional rights (e.g., access, deletion). We will make reasonable efforts to honor applicable requests.
      </p>
    </div>
  )
} 