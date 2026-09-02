import Link from 'next/link';
import { DollarSign, Brain, TrendingUp, Shield, MessageSquare, PiggyBank, Target, BookOpen, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FAUSA</span>
              <span className="text-sm text-gray-500 hidden sm:block">AI Money Coach</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link href="/about" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">About</Link>
              <Link href="/text-notifications" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Text Alerts</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Terms</Link>
              <Link href="/text-notifications" className="bg-emerald-500 text-white hover:bg-emerald-600 px-4 py-2 rounded-md text-sm font-medium">
                Get Text Alerts
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Brain className="w-4 h-4" />
            AI-Powered Financial Coaching
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Personal<br />
            <span className="text-emerald-500">AI Money Coach</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            FAUSA teaches you smart saving tips, budgeting strategies, and money management skills — and adapts to your level the more you engage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/text-notifications"
              className="inline-block px-8 py-4 bg-emerald-500 text-white text-lg font-semibold rounded-lg hover:bg-emerald-600 transition-colors shadow-lg"
            >
              📱 Get Money Tips by Text
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-white text-emerald-600 text-lg font-semibold rounded-lg hover:bg-emerald-50 transition-colors shadow-md border border-emerald-200"
            >
              Learn More →
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free to use. No credit card required. Opt out anytime.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-emerald-600 text-white py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-6 text-sm justify-center">
          <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" /> 6 Financial Skill Areas</span>
          <span className="flex items-center gap-2"><PiggyBank className="w-4 h-4" /> Adaptive Learning</span>
          <span className="flex items-center gap-2"><Target className="w-4 h-4" /> Personalized Coaching</span>
          <span className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> SMS Tips Available</span>
        </div>
      </div>

      {/* What FAUSA Does */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What FAUSA Does</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            FAUSA is an AI-powered financial education platform that meets you exactly where you are — whether you're just starting out or looking to sharpen your everyday money management skills.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Adaptive Learning</h3>
            <p className="text-gray-600">FAUSA tracks what you know and what you need to learn, adjusting its coaching style as you grow from Beginner to Advanced.</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Education</h3>
            <p className="text-gray-600">Learn budgeting, saving, smart spending, and income growth through practical, actionable tips you can use today.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">SMS Coaching</h3>
            <p className="text-gray-600">Opt in to receive personalized money tips, savings challenges, and account updates directly to your phone via text message.</p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">6 Core Financial Skills</h2>
            <p className="text-xl text-gray-600">Everything you need to build lasting financial health</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Saving', desc: 'Emergency funds, high-yield savings accounts, and automatic savings strategies that work while you sleep.' },
              { icon: '📊', title: 'Budgeting', desc: '50/30/20 rule, zero-based budgeting, expense tracking — find the system that works for you.' },
              { icon: '�', title: 'Smart Spending', desc: 'Grocery hacks, subscription audits, and smarter shopping habits that keep more money in your pocket.' },
              { icon: '✂️', title: 'Cutting Costs', desc: 'Identify and eliminate wasteful spending without sacrificing your quality of life.' },
              { icon: '💼', title: 'Earning More', desc: 'Salary negotiation, side hustles, and skill building to increase your take-home income.' },
              { icon: '🎯', title: 'Financial Goals', desc: 'Set and track savings goals, build an emergency fund, and create a plan that actually works.' },
            ].map((topic, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How FAUSA Works</h2>
          <p className="text-xl text-gray-600">Simple, personalized, and always improving</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-emerald-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up</h3>
            <p className="text-gray-600">Opt in to receive personalized financial coaching tips via SMS. No credit card, no commitment.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-emerald-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Receive Tips</h3>
            <p className="text-gray-600">Get actionable money tips, savings challenges, and financial education delivered to your phone.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-emerald-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Take Control</h3>
            <p className="text-gray-600">Apply what you learn and watch your financial skills — and your savings — grow over time.</p>
          </div>
        </div>
      </section>

      {/* SMS CTA Section */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Free SMS Coaching
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Get Money Tips Sent to Your Phone</h2>
          <p className="text-xl text-emerald-100 mb-4">
            Opt in to receive personalized financial coaching tips, savings challenges, and account updates via text message.
          </p>
          <p className="text-emerald-200 text-sm mb-8">
            Message frequency varies. Message and data rates may apply. Reply STOP to cancel. Reply HELP for help.
          </p>
          <Link
            href="/text-notifications"
            className="inline-block px-8 py-4 bg-white text-emerald-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            📱 Sign Up for Text Alerts →
          </Link>
          <p className="mt-4 text-emerald-200 text-sm">
            Opting in is not required to use FAUSA. View our{' '}
            <Link href="/terms#sms-terms" className="underline hover:text-white">SMS Terms & Conditions</Link>.
          </p>
        </div>
      </section>

      {/* Why FAUSA */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why FAUSA?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Most people never learned how to manage money. Schools don't teach it. Parents often don't know it. And financial advisors are expensive.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              FAUSA was built to change that. We created an AI coach that meets you exactly where you are — whether you're just starting out or looking to get smarter about how you manage your money day to day.
            </p>
            <p className="text-lg text-gray-600">
              The more you engage with FAUSA, the more personalized your coaching becomes.
            </p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">No Judgment</h3>
                <p className="text-gray-600">Ask any question, no matter how basic. FAUSA is here to help, not judge.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Skill Progression</h3>
                <p className="text-gray-600">Move from Beginner → Intermediate → Advanced as you master each financial topic.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Brain className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Always Adapting</h3>
                <p className="text-gray-600">FAUSA tracks what you know and adjusts its coaching style as you grow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-4">
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
