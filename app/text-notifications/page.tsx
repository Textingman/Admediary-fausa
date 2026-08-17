'use client';

import Link from 'next/link';
import { useState } from 'react';
import { DollarSign, MessageSquare, Bell, Tag, CheckCircle, Phone } from 'lucide-react';

export default function TextNotificationsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [accountNotifConsent, setAccountNotifConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [termsConsent, setTermsConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsConsent) return;

    setIsSubmitting(true);

    // Simulate form submission — integrate with backend/Web3Forms as needed
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', phone: '', email: '' });
      setAccountNotifConsent(false);
      setMarketingConsent(false);
      setTermsConsent(false);
    }, 1500);
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.phone.trim() &&
    termsConsent;

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
              <Link href="/text-notifications" className="text-gray-900 border-b-2 border-emerald-500 px-3 py-2 text-sm font-medium">Text Alerts</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Terms</Link>
              <Link href="/" className="bg-emerald-500 text-white hover:bg-emerald-600 px-4 py-2 rounded-md text-sm font-medium">
                Start Chatting
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            SMS Notifications
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5">
            Receive Text Notifications
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay on top of your financial coaching journey. Opt in to receive account updates and personalized money tips directly to your phone.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-emerald-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Account Notifications</h3>
            <p className="text-sm text-gray-600">Get important updates about your FAUSA account, session reminders, and progress milestones.</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Money Tips &amp; Offers</h3>
            <p className="text-sm text-gray-600">Receive personalized financial tips, savings challenges, and exclusive coaching content.</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Easy to Manage</h3>
            <p className="text-sm text-gray-600">Reply STOP at any time to opt out. You&apos;re always in control of your notifications.</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You&apos;re Opted In! 🎉</h2>
              <p className="text-lg text-gray-600 mb-4">
                You&apos;ll start receiving text notifications shortly. You can opt out at any time by replying <strong>STOP</strong> to any message.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                For help, reply <strong>HELP</strong> or email{' '}
                <a href="mailto:support@usefausa.com" className="text-emerald-600 hover:text-emerald-700">support@usefausa.com</a>.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign Up for Text Notifications</h2>
                <p className="text-gray-600">
                  Enter your information below to opt in to SMS notifications from FAUSA.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">U.S. mobile numbers only. Standard message and data rates may apply.</p>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* ─── Consent Checkboxes ─────────────────────────────────── */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Notification Preferences (Optional)</h3>

                  {/* Account Notifications Consent */}
                  <div className="bg-[#1e2a3a] rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="account-notif-consent"
                        checked={accountNotifConsent}
                        onChange={(e) => setAccountNotifConsent(e.target.checked)}
                        className="mt-1 h-5 w-5 flex-shrink-0 accent-emerald-400"
                      />
                      <label htmlFor="account-notif-consent" className="text-sm leading-relaxed text-white">
                        <span className="font-semibold text-emerald-300 block mb-1">📱 Account Notifications</span>
                        By checking this box, I agree to receive <strong>account notification text messages</strong> from FAUSA at the mobile number provided. Account notifications may include session reminders, progress updates, security alerts, and important account information. Message frequency varies based on account activity. I understand I may opt out at any time by replying <strong>STOP</strong>. Reply <strong>HELP</strong> for help or email <a href="mailto:support@usefausa.com" className="underline text-emerald-300">support@usefausa.com</a>. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages. Opting in is not required to use FAUSA.
                      </label>
                    </div>
                  </div>

                  {/* Marketing / Promotional Consent */}
                  <div className="bg-[#1e2a3a] rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="marketing-consent"
                        checked={marketingConsent}
                        onChange={(e) => setMarketingConsent(e.target.checked)}
                        className="mt-1 h-5 w-5 flex-shrink-0 accent-emerald-400"
                      />
                      <label htmlFor="marketing-consent" className="text-sm leading-relaxed text-white">
                        <span className="font-semibold text-emerald-300 block mb-1">💡 Money Tips &amp; Promotional Messages</span>
                        By checking this box, I agree to receive <strong>marketing and promotional text messages</strong> from FAUSA at the mobile number provided. Marketing messages may include personalized money-saving tips, financial coaching content, product updates, and special offers. Message frequency may vary. I understand I may opt out at any time by replying <strong>STOP</strong>. Reply <strong>HELP</strong> for help or email <a href="mailto:support@usefausa.com" className="underline text-emerald-300">support@usefausa.com</a>. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages. Opting in is not required to use FAUSA.
                      </label>
                    </div>
                  </div>

                  {/* Terms & Privacy — Required */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms-consent"
                        checked={termsConsent}
                        onChange={(e) => setTermsConsent(e.target.checked)}
                        required
                        className="mt-1 h-5 w-5 flex-shrink-0 accent-emerald-500"
                      />
                      <label htmlFor="terms-consent" className="text-sm leading-relaxed text-gray-800">
                        I have read and agree to the{' '}
                        <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-medium underline">
                          Privacy Policy
                        </Link>
                        . <span className="text-red-500 font-semibold">*</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
                    isSubmitting || !isFormValid
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What kinds of texts will I receive?',
                a: 'Depending on your selections, you may receive account notifications (session reminders, progress updates, security alerts) and/or marketing messages (money tips, savings challenges, coaching content, and special offers).',
              },
              {
                q: 'How do I stop receiving texts?',
                a: 'Reply STOP to any text message from FAUSA at any time. You will receive a one-time confirmation and will not receive further messages unless you re-enroll.',
              },
              {
                q: 'Will I be charged for these texts?',
                a: 'FAUSA does not charge for text messages, but standard message and data rates from your mobile carrier may apply.',
              },
              {
                q: 'Is my phone number shared with third parties?',
                a: 'No. Your mobile number will never be sold or shared with third parties for marketing purposes. See our Privacy Policy for full details.',
              },
              {
                q: 'Is opting in required to use FAUSA?',
                a: 'No. Opting in to SMS notifications is completely optional and is not required to access or use any FAUSA service.',
              },
              {
                q: 'How do I get help with my text notifications?',
                a: 'Reply HELP to any message, or contact us at support@usefausa.com or +1 (844) 435-3969.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-0">
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
            <Link href="/text-notifications" className="hover:text-white">Text Alerts</Link>
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
