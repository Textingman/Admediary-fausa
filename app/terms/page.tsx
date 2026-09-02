import Link from 'next/link';
import { DollarSign } from 'lucide-react';

export default function TermsPage() {
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
              <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Terms</Link>
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
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">Last Updated: August 14, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using FAUSA's AI money coaching service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users of the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 mb-6">
            FAUSA provides an AI-powered financial education and coaching platform that teaches money management skills including budgeting, saving, smart spending, cutting costs, and income growth. The Service includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Interactive AI chat coaching sessions</li>
            <li>Personalized financial tips and education</li>
            <li>Adaptive learning that adjusts to your skill level</li>
            <li>Progress tracking across financial topics</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Not Financial Advice</h2>
          <p className="text-gray-600 mb-6">
            <strong>Important Disclaimer:</strong> FAUSA provides general financial education and information only. The content provided by FAUSA is not personalized financial, tax, or legal advice. Always consult a qualified financial advisor, accountant, or attorney before making significant financial decisions. FAUSA is not a registered financial advisor or financial planner.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Acceptable Use</h2>
          <p className="text-gray-600 mb-4">You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit harmful, offensive, or fraudulent content</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with or disrupt the Service</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            The Service and all content, features, and functionality are owned by FAUSA and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Disclaimers and Limitations of Liability</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Service "As Is"</h3>
          <p className="text-gray-600 mb-6">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Limitation of Liability</h3>
          <p className="text-gray-600 mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, FAUSA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Privacy</h2>
          <p className="text-gray-600 mb-6">
            Your use of the Service is also governed by our <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-medium">Privacy Policy</Link>. By using the Service, you consent to our collection and use of information as described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Upon termination, all licenses and rights granted to you will immediately cease.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" id="sms-terms">11. SMS Terms & Conditions</h2>
          <p className="text-gray-600 mb-4">
            By opting in to receive SMS messages from FAUSA, you agree to the following terms:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>You agree to receive text messages from FAUSA for account notifications and/or promotional/marketing messages.</li>
            <li>Message frequency varies based on your account activity and preferences.</li>
            <li>Message and data rates may apply. Check with your mobile carrier for details.</li>
            <li>Reply <strong>HELP</strong> for help, or contact us at <a href="mailto:support@usefausa.com" className="text-emerald-600 hover:text-emerald-700">support@usefausa.com</a> or <a href="tel:+15165975008" className="text-emerald-600 hover:text-emerald-700">+1 (516) 597-5008</a>.</li>
            <li>Reply <strong>STOP</strong> to cancel and opt out of all SMS messages at any time. You will receive a one-time confirmation and will not receive further messages unless you re-enroll.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>Opting in to SMS is not required to use FAUSA services.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:legal@usefausa.com" className="text-emerald-600 hover:text-emerald-700">legal@usefausa.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Support:</strong> <a href="mailto:support@usefausa.com" className="text-emerald-600 hover:text-emerald-700">support@usefausa.com</a></p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="https://usefausa.com" className="text-emerald-600 hover:text-emerald-700">https://usefausa.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">FAUSA</span>
                <span className="text-gray-400 text-sm">— AI Money Coach</span>
              </div>
              <p className="text-gray-400 text-sm">1201 Orange Street, Suite 600</p>
              <p className="text-gray-400 text-sm">Wilmington, DE 19801</p>
            </div>
            <div className="flex flex-col gap-1 text-sm text-gray-400">
              <p className="text-gray-300 font-semibold mb-1">Support</p>
              <a href="mailto:support@usefausa.com" className="hover:text-white">support@usefausa.com</a>
              <a href="tel:+15165975008" className="hover:text-white">+1 (516) 597-5008</a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p className="text-gray-300 font-semibold mb-1">Links</p>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/text-notifications" className="hover:text-white">Text Alerts</Link>
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-xs">© 2025 FAUSA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
