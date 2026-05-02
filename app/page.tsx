import Link from 'next/link';
import { ArrowRight, Settings, Shield, Zap, Search } from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900"
          >
            Find Your Perfect <span className="text-blue-600">Linux</span> Match
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Stop guessing which Linux distribution to install. Use our intuitive recommendation engine to find the right OS based on your hardware, experience level, and use case.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              href="/chooser" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Help Me Choose <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/compare" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
            >
              Compare Distros <Search className="ml-2 h-5 w-5 text-gray-400" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Everything you need to make the switch</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive data and modern tools to navigate the open-source world.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Settings className="h-8 w-8 text-blue-500" />}
            title="Recommendation Engine"
            description="Answer a few simple questions and let our algorithm match you with the ideal distribution and desktop environment for your specific needs."
            link="/chooser"
            linkText="Try the Engine"
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-blue-500" />}
            title="Hardware & Resource Analysis"
            description="Compare distributions based on minimum hardware requirements and real-world resource utilization to ensure smooth performance."
            link="/compare"
            linkText="View Comparisons"
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-blue-500" />}
            title="Security Best Practices"
            description="Explore dedicated guides on how to properly secure your system, understand package managers, and mitigate vulnerabilities."
            link="/security"
            linkText="Read Security Guide"
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Linux? The Smart Choice for Power, Privacy, and Freedom</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you&apos;re searching for a faster, safer, and more customizable operating system, Linux might be exactly what you need. Whether you&apos;re a beginner, developer, content creator, or privacy enthusiast, Linux offers something that traditional operating systems simply can&apos;t match.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              But why are millions of users switching to Linux in 2026? Let&apos;s break it down.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-3">
                <span className="text-blue-600 mr-2">🚀</span> 1. Linux Is Free and Open Source
              </h3>
              <p className="text-gray-700 mb-3">One of the biggest advantages of Linux is that it&apos;s completely free to use. Unlike proprietary operating systems, Linux is built on open-source principles, meaning:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>No license fees</li>
                <li>No forced upgrades</li>
                <li>Full transparency</li>
              </ul>
              <p className="text-gray-700 mt-3">You can download, install, and modify Linux without paying a single rupee.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-3">
                <span className="text-blue-600 mr-2">🔒</span> 2. Privacy and Security Come First
              </h3>
              <p className="text-gray-700 mb-3">In a world where data tracking is everywhere, Linux stands out as a privacy-friendly alternative.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>No built-in spyware</li>
                <li>No hidden telemetry</li>
                <li>Strong permission-based system</li>
              </ul>
              <p className="text-gray-700 mt-3">Linux distributions give you full control over your data — not corporations.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-3">
                <span className="text-blue-600 mr-2">⚡</span> 3. Fast and Lightweight Performance
              </h3>
              <p className="text-gray-700 mb-3">Linux runs smoothly even on older or low-end hardware. Many distributions are optimized for speed and efficiency.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Faster boot times</li>
                <li>Lower RAM usage</li>
                <li>Better performance on old PCs</li>
              </ul>
              <p className="text-gray-700 mt-3">This makes Linux perfect if your system feels slow on other operating systems.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-3">
                <span className="text-blue-600 mr-2">🧩</span> 4. Full Customization and Control
              </h3>
              <p className="text-gray-700 mb-3">With Linux, you&apos;re not locked into one experience. You can customize almost everything:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Desktop environments (GNOME, KDE, XFCE)</li>
                <li>Themes and layouts</li>
                <li>System behavior</li>
              </ul>
              <p className="text-gray-700 mt-3">Want your system to look like macOS or Windows? You can do that easily.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-3">
                <span className="text-blue-600 mr-2">🧑‍💻</span> 5. Perfect for Developers and Creators
              </h3>
              <p className="text-gray-700 mb-3">Linux is the go-to platform for developers, sysadmins, and tech enthusiasts.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Built-in terminal and powerful tools</li>
                <li>Native support for programming languages</li>
                <li>Ideal for web development, AI, and servers</li>
              </ul>
              <p className="text-gray-700 mt-3">Even content creators are switching to Linux thanks to powerful open-source tools.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-3">
                <span className="text-blue-600 mr-2">🌍</span> 6. Huge Community Support
              </h3>
              <p className="text-gray-700 mb-3">Linux has one of the largest and most helpful communities in the world.</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Forums, guides, and tutorials everywhere</li>
                <li>Fast solutions to common problems</li>
                <li>Constant improvements from global contributors</li>
              </ul>
              <p className="text-gray-700 mt-3">You&apos;re never alone when using Linux.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-3">
                <span className="text-blue-600 mr-2">💻</span> 7. Hundreds of Distros — Choose What Fits You
              </h3>
              <p className="text-gray-700 mb-3">Unlike other operating systems, Linux comes in many versions called distributions (distros).</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Beginner-friendly (Ubuntu, Linux Mint)</li>
                <li>Advanced users (Arch Linux, Gentoo)</li>
                <li>Privacy-focused (Tails, Qubes OS)</li>
                <li>Lightweight (Lubuntu, Puppy Linux)</li>
              </ul>
              <p className="text-gray-700 mt-3">Each distro is designed for a different type of user.</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-blue-600 mr-2">👉</span> And that&apos;s exactly why choosing the right one can be confusing.
            </h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              <span className="text-blue-600 mr-2">🎯</span> Find the Perfect Linux Distro for You
            </h4>
            <p className="text-gray-700 mb-4">Not sure where to start?</p>
            <p className="text-gray-700 mb-4">Our Linux Distro Chooser Tool helps you find the best Linux distribution based on your needs, experience level, and hardware — in just a few clicks.</p>
            <ul className="space-y-2 text-gray-700 mb-6 font-medium">
              <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Beginner or advanced</li>
              <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Old PC or powerful machine</li>
              <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span> Privacy, performance, or customization</li>
            </ul>
            <p className="text-gray-700 font-medium mb-6">👉 Start your journey now and discover your perfect Linux distro.</p>
            <Link 
              href="/chooser" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Start Distro Chooser
            </Link>
          </div>

          <div className="text-center mt-12 bg-gray-900 text-white rounded-2xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center">
              <span className="mr-3 text-blue-400">🧠</span> Final Thoughts
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4 max-w-2xl mx-auto">
              Linux isn&apos;t just an operating system — it&apos;s a movement toward freedom, control, and better computing.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
              If you&apos;re tired of slow performance, privacy concerns, and lack of control, it&apos;s time to make the switch.
            </p>
            <p className="text-xl font-bold text-blue-400">
              Linux gives you the power back.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link, linkText }: { icon: React.ReactNode, title: string, description: string, link: string, linkText: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
      <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow mb-6">{description}</p>
      <Link href={link} className="text-blue-600 font-medium inline-flex items-center hover:underline">
        {linkText} <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
