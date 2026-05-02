import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Linux Distro Chooser
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Helping you navigate the open-source world and find the perfect Linux distribution for your needs.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Tools
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/chooser" className="text-base text-gray-500 hover:text-blue-600">
                  Help Me Choose
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-base text-gray-500 hover:text-blue-600">
                  Compare Distros
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-base text-gray-500 hover:text-blue-600">
                  Security Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-base text-gray-500 hover:text-blue-600">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-base text-gray-500 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Linux Distro Chooser. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-sm text-gray-500">
            Created by <a href="https://techrefreshing.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">techrefreshing.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
