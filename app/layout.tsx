import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://techrefreshing.github.io/linux-distro-chooser/'),
  title: {
    default: 'Linux Distro Chooser - Find Your Perfect Linux OS',
    template: '%s | Linux Distro Chooser',
  },
  description: 'An intuitive helper for choosing the right Linux distribution based on user needs, hardware, and experience level. Compare Ubuntu, Arch, Fedora, Debian and more.',
  keywords: ['Linux', 'Distro Chooser', 'Ubuntu', 'Arch Linux', 'Fedora', 'Debian', 'Open Source', 'Operating System', 'Tech Refreshing'],
  authors: [{ name: 'Tech Refreshing', url: 'https://techrefreshing.com' }],
  creator: 'Tech Refreshing',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techrefreshing.github.io/linux-distro-chooser/',
    siteName: 'Linux Distro Chooser',
    title: 'Linux Distro Chooser - Find Your Perfect Linux OS',
    description: 'An intuitive helper for choosing the right Linux distribution based on user needs, hardware, and experience level.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex flex-col min-h-screen bg-white font-sans text-gray-900 antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
