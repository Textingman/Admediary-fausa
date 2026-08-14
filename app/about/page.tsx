import Link from 'next/link';
import { DollarSign, Brain, TrendingUp, Shield, Zap, Users } from 'lucide-react';

export default function AboutPage() {
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
              <Link href="/about" className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium">About</Link>
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
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            About FAUSA
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            FAUSA is your personal AI money coach that teaches you smart saving and financial skills — and gets smarter about <em>your</em> needs the more you chat.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              Most people never learned how to manage money. Schools don't teach it. Parents often don't know it. And financial advisors are expensive.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              FAUSA was built to change that. We created an AI coach that meets you exactly where you are — whether you're just starting out or ready to optimize your wealth-building strategy.
            </p>
            <p className="text-lg text-gray-600">
              The more you talk to FAUSA, the more it learns what financial skills you need to develop, and the more personalized your coaching becomes.
            </p>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <Brain className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Adaptive Learning</h3>
                <p className="text-gray-600">FAUSA tracks what you know and what you need to learn, adjusting its coaching style as you grow.</p>
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
              <Shield className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">No Judgment</h3>
                <p className="text-gray-600">Ask any question, no matter how basic. FAUSA is here to help, not judge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How FAUSA Works</h2>
            <p className="text-xl text-gray-600">The more you chat, the smarter your coaching gets</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Chatting</h3>
              <p className="text-gray-600">Ask any money question. FAUSA starts at your level and listens to understand your situation.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FAUSA Learns</h3>
              <p className="text-gray-600">With every message, FAUSA identifies your knowledge gaps and adjusts its teaching to fill them.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">You Level Up</h3>
              <p className="text-gray-600">Track your progress from Beginner to Advanced as you build real financial skills that last a lifetime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What FAUSA Teaches</h2>
          <p className="text-xl text-gray-600">6 core financial skill areas, personalized to you</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '💰', title: 'Saving', desc: 'Emergency funds, high-yield accounts, automatic savings strategies' },
            { icon: '📊', title: 'Budgeting', desc: '50/30/20 rule, zero-based budgeting, expense tracking' },
            { icon: '💳', title: 'Debt', desc: 'Avalanche vs snowball methods, credit card traps, balance transfers' },
            { icon: '📈', title: 'Investing', desc: 'Index funds, 401(k), Roth IRA, compound interest' },
            { icon: '✂️', title: 'Frugal Living', desc: 'Grocery hacks, subscription audits, cutting costs without sacrifice' },
            { icon: '💼', title: 'Earning More', desc: 'Salary negotiation, side hustles, passive income, skill building' },
          ].map((topic, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{topic.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 text-sm">{topic.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Better Money Habits?</h2>
          <p className="text-xl text-emerald-100 mb-8">Start chatting with FAUSA for free. No sign-up required.</p>
          <Link href="/" className="inline-block px-8 py-4 bg-white text-emerald-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Start Your Money Journey →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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
