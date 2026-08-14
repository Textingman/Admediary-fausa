'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, TrendingUp, PiggyBank, DollarSign, Target } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
interface Message {
  role: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

interface UserProfile {
  level: 'beginner' | 'intermediate' | 'advanced';
  topicsDiscussed: string[];
  weakAreas: string[];
  messageCount: number;
}

// ─── Money Tips Knowledge Base ────────────────────────────────────────────────
const MONEY_TIPS: Record<string, { tips: string[]; keywords: string[] }> = {
  budgeting: {
    keywords: ['budget', 'budgeting', 'spending', 'track', 'expenses', 'money management'],
    tips: [
      "💡 **50/30/20 Rule**: Spend 50% on needs, 30% on wants, and save 20%. It's the simplest budget framework to start with.",
      "📊 **Zero-Based Budgeting**: Give every dollar a job. At the end of the month, income minus expenses should equal zero.",
      "📱 **Track Every Purchase**: Use a free app like Mint or YNAB to see where your money actually goes — most people are shocked!",
      "🗓️ **Weekly Money Date**: Spend 15 minutes every Sunday reviewing your spending. Awareness alone reduces overspending by 20%.",
    ],
  },
  saving: {
    keywords: ['save', 'saving', 'savings', 'emergency fund', 'rainy day', 'nest egg'],
    tips: [
      "🏦 **Pay Yourself First**: Set up an automatic transfer to savings the day you get paid. You can't spend what you don't see.",
      "🎯 **Emergency Fund Goal**: Aim for 3–6 months of expenses in a high-yield savings account (HYSA). Start with just $1,000.",
      "💰 **Round-Up Savings**: Use apps like Acorns or your bank's round-up feature — spare change adds up to hundreds per year.",
      "📈 **High-Yield Savings**: Move your savings from a 0.01% APY account to a HYSA earning 4–5% APY. Free money!",
    ],
  },
  debt: {
    keywords: ['debt', 'credit card', 'loan', 'interest', 'pay off', 'owe'],
    tips: [
      "⚡ **Avalanche Method**: Pay minimums on all debts, then throw extra money at the highest-interest debt first. Saves the most money.",
      "�snowball **Snowball Method**: Pay off smallest debts first for quick wins and motivation. Then roll that payment to the next debt.",
      "💳 **Credit Card Trap**: Paying only the minimum on a $5,000 balance at 20% APR takes 27 years and costs $8,000+ in interest!",
      "🔄 **Balance Transfer**: Move high-interest credit card debt to a 0% APR card. You could save hundreds in interest.",
    ],
  },
  investing: {
    keywords: ['invest', 'investing', 'stocks', 'index fund', '401k', 'ira', 'retirement', 'compound'],
    tips: [
      "📈 **Index Funds**: Warren Buffett recommends low-cost S&P 500 index funds for most people. Average 10% annual return historically.",
      "🏢 **401(k) Match**: Always contribute enough to get your employer's full 401(k) match — it's a 50–100% instant return!",
      "⏰ **Compound Interest**: $200/month invested at 25 grows to $700,000 by 65. The same $200 at 35 only grows to $340,000.",
      "🛡️ **Roth IRA**: Contribute up to $7,000/year (2024). Your money grows tax-free and withdrawals in retirement are tax-free.",
    ],
  },
  frugal: {
    keywords: ['frugal', 'cheap', 'cut costs', 'save money', 'discount', 'coupon', 'deals'],
    tips: [
      "🛒 **Grocery Hacks**: Meal plan before shopping, buy store brands, and shop the perimeter of the store. Save 30–40% on groceries.",
      "📺 **Subscription Audit**: The average American pays for 4+ streaming services. Cancel what you don't use — that's $50–$100/month.",
      "☕ **Latte Factor**: Making coffee at home instead of buying daily saves $1,000–$1,500/year. Small habits = big savings.",
      "🚗 **Car Costs**: Transportation is often the #2 expense. Consider refinancing your auto loan, carpooling, or going car-free.",
    ],
  },
  income: {
    keywords: ['income', 'earn more', 'side hustle', 'raise', 'salary', 'freelance', 'extra money'],
    tips: [
      "💼 **Negotiate Your Salary**: 70% of people who ask for a raise get one. Research market rates on Glassdoor and ask confidently.",
      "🚀 **Side Hustle Ideas**: Freelancing, tutoring, selling on Etsy, or driving for DoorDash can add $500–$2,000/month.",
      "📚 **Skill Up**: Every $1 spent on education returns $10+ in earning potential. Online courses on Coursera or Udemy are cheap.",
      "🏠 **Passive Income**: Rent a room, park your car, or sell digital products. Passive income works while you sleep.",
    ],
  },
};

// ─── Adaptive Response Engine ─────────────────────────────────────────────────
function detectTopic(message: string): string | null {
  const lower = message.toLowerCase();
  for (const [topic, data] of Object.entries(MONEY_TIPS)) {
    if (data.keywords.some(kw => lower.includes(kw))) return topic;
  }
  return null;
}

function getAdaptiveResponse(message: string, profile: UserProfile): string {
  const lower = message.toLowerCase();
  const topic = detectTopic(message);

  // Greetings
  if (/^(hi|hello|hey|start|begin|help)/.test(lower) && profile.messageCount <= 1) {
    return `👋 Hey there! I'm **FAUSA**, your personal AI money coach!\n\nI adapt to *your* financial skill level as we chat. The more you talk to me, the better I understand what you need to learn.\n\nTo get started, tell me:\n- What's your biggest money challenge right now?\n- Or ask me about: **budgeting, saving, debt, investing, or earning more**`;
  }

  // Topic-based response
  if (topic) {
    const tips = MONEY_TIPS[topic].tips;
    const alreadyCovered = profile.topicsDiscussed.includes(topic);
    const tipIndex = alreadyCovered ? Math.floor(Math.random() * tips.length) : 0;
    const tip = tips[tipIndex];

    let response = tip;

    // Add level-appropriate follow-up
    if (profile.level === 'beginner') {
      response += `\n\n🎓 **Beginner tip**: Start with just one small action today. What feels most doable for you?`;
    } else if (profile.level === 'intermediate') {
      response += `\n\n📊 **Next level**: You've got the basics. Want to go deeper on ${topic}? Ask me a specific question!`;
    } else {
      response += `\n\n🚀 **Advanced move**: Since you're experienced, let's talk optimization strategies. What's your current ${topic} setup?`;
    }

    return response;
  }

  // Weak area detection
  if (/don't know|confused|lost|not sure|what is|explain|how do/.test(lower)) {
    return `No worries — that's exactly why I'm here! 😊\n\nBased on our conversation, I think you'd benefit most from learning about **${profile.weakAreas[0] || 'budgeting'}** first.\n\nHere's a simple starting point:\n${MONEY_TIPS[profile.weakAreas[0] || 'budgeting'].tips[0]}\n\nDoes that make sense? Ask me anything!`;
  }

  // Progress check
  if (/progress|how am i doing|what have i learned|summary/.test(lower)) {
    const covered = profile.topicsDiscussed.length;
    return `📊 **Your Learning Progress**\n\n✅ Topics covered: ${covered > 0 ? profile.topicsDiscussed.join(', ') : 'None yet'}\n🎯 Your level: **${profile.level}**\n💬 Messages exchanged: ${profile.messageCount}\n\n${covered < 3 ? "You're just getting started! Try asking about saving, budgeting, or debt." : "Great progress! You're building solid money skills. 🎉"}`;
  }

  // Generic encouragement with suggestion
  const suggestions = Object.keys(MONEY_TIPS).filter(t => !profile.topicsDiscussed.includes(t));
  const suggest = suggestions[0] || 'investing';
  return `Great question! 💬 I'm still learning your financial situation.\n\nBased on what we've discussed, I'd suggest exploring **${suggest}** next — it's a key skill for your level.\n\nOr tell me more about your specific situation and I'll give you personalized advice!`;
}

function updateProfile(profile: UserProfile, message: string): UserProfile {
  const topic = detectTopic(message);
  const newProfile = { ...profile, messageCount: profile.messageCount + 1 };

  if (topic && !newProfile.topicsDiscussed.includes(topic)) {
    newProfile.topicsDiscussed = [...newProfile.topicsDiscussed, topic];
  }

  // Update level based on message count and topics
  if (newProfile.messageCount >= 15 || newProfile.topicsDiscussed.length >= 4) {
    newProfile.level = 'advanced';
  } else if (newProfile.messageCount >= 6 || newProfile.topicsDiscussed.length >= 2) {
    newProfile.level = 'intermediate';
  }

  // Track weak areas (topics not yet discussed)
  newProfile.weakAreas = Object.keys(MONEY_TIPS).filter(t => !newProfile.topicsDiscussed.includes(t));

  return newProfile;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "👋 Hey there! I'm **FAUSA**, your personal AI money coach!\n\nI adapt to *your* financial skill level as we chat. The more you talk to me, the better I understand what you need to learn.\n\nTo get started, tell me:\n- What's your biggest money challenge right now?\n- Or ask me about: **budgeting, saving, debt, investing, or earning more**",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [profile, setProfile] = useState<UserProfile>({
    level: 'beginner',
    topicsDiscussed: [],
    weakAreas: Object.keys(MONEY_TIPS),
    messageCount: 0,
  });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const newProfile = updateProfile(profile, input);
    setProfile(newProfile);

    setTimeout(() => {
      const botResponse = getAdaptiveResponse(input, newProfile);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse, timestamp: new Date() }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
  };

  const levelColors: Record<string, string> = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-blue-100 text-blue-700',
    advanced: 'bg-purple-100 text-purple-700',
  };

  const quickPrompts = [
    { label: '💰 Saving tips', prompt: 'How do I start saving money?' },
    { label: '📊 Budgeting', prompt: 'Teach me about budgeting' },
    { label: '💳 Debt help', prompt: 'How do I pay off debt?' },
    { label: '📈 Investing', prompt: 'How do I start investing?' },
    { label: '💼 Earn more', prompt: 'How can I earn more money?' },
    { label: '📋 My progress', prompt: 'Show me my progress' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col">
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
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${levelColors[profile.level]}`}>
                {profile.level.charAt(0).toUpperCase() + profile.level.slice(1)}
              </span>
              <div className="hidden md:flex items-baseline space-x-4">
                <Link href="/about" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">About</Link>
                <Link href="/privacy" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Privacy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-emerald-600 px-3 py-2 text-sm font-medium">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Stats Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-5xl mx-auto px-4 flex gap-6 text-sm justify-center">
          <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> {profile.topicsDiscussed.length} topics learned</span>
          <span className="flex items-center gap-1"><PiggyBank className="w-4 h-4" /> {profile.messageCount} messages</span>
          <span className="flex items-center gap-1"><Target className="w-4 h-4" /> {profile.weakAreas.length} skills to unlock</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 flex flex-col gap-4">
        {/* Messages */}
        <div className="flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot' ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                {msg.role === 'bot' ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'bot'
                  ? 'bg-white shadow-md text-gray-800 rounded-tl-sm'
                  : 'bg-blue-500 text-white rounded-tr-sm'
              }`}>
                <div dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white shadow-md rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1 items-center h-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="flex flex-wrap gap-2 mt-2">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => { setInput(qp.prompt); }}
              className="text-xs bg-white border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full hover:bg-emerald-50 transition-colors shadow-sm"
            >
              {qp.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex items-end gap-2 p-3">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about money, saving, or investing..."
            rows={1}
            className="flex-1 resize-none outline-none text-sm text-gray-800 placeholder-gray-400 max-h-32"
            style={{ minHeight: '24px' }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
              input.trim() && !isTyping
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        <p className="text-center text-xs text-gray-400">
          FAUSA learns from your questions and adapts to your skill level. Press Enter to send.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-4">
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
