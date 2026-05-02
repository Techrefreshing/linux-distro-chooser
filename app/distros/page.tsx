'use client';

import { useState } from 'react';
import { distributions, UseCase } from '@/lib/data';
import Link from 'next/link';
import { Download, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import * as motion from 'motion/react-client';
import Image from 'next/image';

export default function DistrosPage() {
  const [activeFilter, setActiveFilter] = useState<UseCase | 'All'>('All');

  const filters: (UseCase | 'All')[] = ['All', 'Daily Desktop', 'Gaming', 'Development', 'Server', 'Privacy/Security', 'Multimedia Production'];

  const filteredDistros = activeFilter === 'All' 
    ? distributions 
    : distributions.filter(d => d.useCases.includes(activeFilter));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Browse Linux Distributions – Find the Perfect Distro for Your Needs</h1>
        <p className="text-lg text-gray-600 mb-4">
          Choosing the right Linux distribution can feel overwhelming — especially with hundreds of options available. Each distro offers a unique experience, different tools, and varying levels of complexity. That&apos;s why this page is designed to help you easily browse Linux distributions and discover the one that fits your needs perfectly.
        </p>
        <p className="text-lg text-gray-600">
          Whether you&apos;re a beginner switching from Windows, a developer looking for performance, or a privacy-focused user, there&apos;s a Linux distro built just for you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDistros.map((distro, index) => (
          <motion.div 
            key={distro.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${new URL(distro.websiteUrl).hostname}&sz=128`}
                  alt={`${distro.name} logo`}
                  fill
                  className="object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{distro.name}</h2>
                <div className="text-xs font-medium text-gray-500 max-w-[200px] truncate">{distro.family}</div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {distro.shortDescription}
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Experience:</span>
                <span className="font-medium text-gray-900">{distro.experienceLevel}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Update Model:</span>
                <span className="font-medium text-gray-900">{distro.updateModel}</span>
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                {distro.useCases.slice(0, 3).map(useCase => (
                  <span key={useCase} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-3">
              <a 
                href={distro.downloadUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex justify-center items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                <Download className="w-4 h-4" /> Download
              </a>
              <a 
                href={distro.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                title="Official Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-3">🧭</span> Explore Linux Distros by Category
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Not all Linux distributions are created equal. Some are designed for simplicity, while others give you complete control over every aspect of your system. To make things easier, we&apos;ve organized distros into clear categories:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4 mb-6">
            <li><strong>Beginner-Friendly Distros</strong> – Easy to install and use, perfect for first-time Linux users</li>
            <li><strong>Lightweight Distros</strong> – Ideal for old or low-end hardware</li>
            <li><strong>Advanced &amp; Power User Distros</strong> – Built for customization and control</li>
            <li><strong>Privacy &amp; Security Focused Distros</strong> – Designed to protect your data</li>
            <li><strong>Rolling Release Distros</strong> – Always up-to-date with the latest software</li>
          </ul>
          <p className="text-lg text-gray-700">
            Browsing by category helps you quickly narrow down your choices without getting lost.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-3">⚡</span> Compare Features That Matter
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            When browsing Linux distributions, it&apos;s important to look beyond just the name. Each distro differs in key areas such as:
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4 mb-6">
            <li>Performance and system requirements</li>
            <li>Desktop environment (GNOME, KDE, XFCE, etc.)</li>
            <li>Software availability and package management</li>
            <li>Stability vs cutting-edge updates</li>
            <li>Community support and documentation</li>
          </ul>
          <p className="text-lg text-gray-700">
            This page makes it easy to compare these features so you can make an informed decision.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-3">💻</span> Find a Distro That Matches Your Hardware
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Not every Linux distro runs the same on all devices. Some are optimized for modern systems, while others are built specifically for older machines.
          </p>
          <p className="text-lg text-gray-700">
            If your computer is slow or outdated, a lightweight distro can bring it back to life. On the other hand, if you have powerful hardware, you can enjoy visually rich and feature-packed environments.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-10 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-3">🎯</span> Not Sure What to Choose?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            If you&apos;re still confused after browsing, that&apos;s completely normal. With so many great options, choosing just one can be difficult.
          </p>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            That&apos;s where our Linux Distro Chooser Tool comes in.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Instead of guessing, you can answer a few simple questions and get personalized recommendations based on your needs, experience level, and use case.
          </p>
          <Link 
            href="/chooser" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Try the Distro Chooser
          </Link>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-3">🌍</span> Why Browsing Matters
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Exploring Linux distributions isn&apos;t just about picking an operating system — it&apos;s about finding a workflow that suits you.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Some users prefer a clean and minimal setup, while others want a fully customized desktop. Some value stability, while others want the latest features.
          </p>
          <p className="text-lg text-gray-700">
            By browsing different distros, you get a better understanding of what Linux can offer — and how flexible it really is.
          </p>
        </div>

        <div className="text-center pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
            <span className="text-blue-600 mr-3">🚀</span> Start Exploring Now
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Scroll through the available Linux distributions, compare features, and discover what makes each one unique.
          </p>
          <p className="text-xl font-bold text-blue-600">
            Your perfect Linux experience is just a few clicks away.
          </p>
        </div>
      </div>
    </div>
  );
}
