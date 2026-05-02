import { Mail, MapPin, MessageSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Tech Refreshing team for questions about Linux distros or support for our recommendation engine.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have a question about a distribution? Found a bug in our recommendation engine? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
          <form className="space-y-6" action="mailto:techrefreshing02@gmail.com" method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="flex items-start">
            <div className="shrink-0 bg-blue-50 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-1 text-gray-600">
                <a href="mailto:techrefreshing02@gmail.com" className="hover:text-blue-600 hover:underline">
                  techrefreshing02@gmail.com
                </a>
              </p>
              <p className="mt-1 text-sm text-gray-500">We aim to respond within 24-48 hours.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 bg-blue-50 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Community Support</h3>
              <p className="mt-1 text-gray-600">Join our Discord server</p>
              <p className="mt-1 text-sm text-gray-500">For immediate community support regarding Linux installations.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="shrink-0 bg-blue-50 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Headquarters</h3>
              <p className="mt-1 text-gray-600">Tech Refreshing Labs</p>
              <p className="mt-1 text-sm text-gray-500">Global Remote Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
