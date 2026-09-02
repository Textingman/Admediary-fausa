import Link from 'next/link';
import { DollarSign } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FAUSA</span>
              <span className="text-sm text-gray-500 hidden sm:block">AI Money Coach</span>
            </Link>
            <div className="hidden md:flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">About</Link>
              <Link href="/text-notifications" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Text Alerts</Link>
              <Link href="/privacy" className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Terms</Link>
              <Link href="/text-notifications" className="bg-emerald-500 text-white hover:bg-emerald-600 px-4 py-2 rounded-md text-sm font-medium">
                Get Text Alerts
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last Updated: August 14, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            FAUSA ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI money coaching service and website at usefausa.com.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Chat Conversations</h3>
          <p className="text-gray-600 mb-6">
            FAUSA processes your chat messages locally in your browser session to provide personalized financial coaching. Your conversation history is stored only in your browser's session memory and is not transmitted to or stored on our servers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Usage Data</h3>
          <p className="text-gray-600 mb-4">When you use our service, we may automatically collect:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>IP address and general location data</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring website information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 No Personal Financial Data Stored</h3>
          <p className="text-gray-600 mb-6">
            <strong>Important:</strong> FAUSA does NOT store, collect, or transmit any personal financial information you share in the chat. Your account numbers, balances, or specific financial details remain private and are never saved to our systems.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Mobile Information</h3>
          <p className="text-gray-600 mb-6">
            <strong>No mobile information will be shared or sold to third parties for marketing purposes.</strong> Any SMS communications you opt into are solely for account notifications and will be handled in accordance with this policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide and improve our AI money coaching service</li>
            <li>Personalize your learning experience</li>
            <li>Analyze usage patterns to improve the platform</li>
            <li>Ensure the security and integrity of our service</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Information Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for research or analytics purposes. We may share information with service providers who assist in operating our website, subject to confidentiality agreements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security measures to protect your information. Our website uses HTTPS encryption. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar tracking technologies to improve your experience. You can instruct your browser to refuse cookies, though some features may not function properly without them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="text-gray-600 mb-6">
            To exercise these rights, contact us at <a href="mailto:privacy@usefausa.com" className="text-emerald-600 hover:text-emerald-700">privacy@usefausa.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
          <p className="text-gray-600 mb-6">
            Our service is not intended for individuals under 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of changes by posting the updated policy on this page with a new "Last Updated" date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:privacy@usefausa.com" className="text-emerald-600 hover:text-emerald-700">privacy@usefausa.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Support:</strong> <a href="mailto:support@usefausa.com" className="text-emerald-600 hover:text-emerald-700">support@usefausa.com</a></p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="https://usefausa.com" className="text-emerald-600 hover:text-emerald-700">https://usefausa.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">FAUSA</span>
            <span className="text-gray-400 text-sm">— AI Money Coach</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <a href="mailto:support@usefausa.com" className="hover:text-white">Contact</a>
          </div>
          <p className="text-gray-500 text-xs">© 2025 FAUSA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
