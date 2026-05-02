import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Linux Distro Chooser and Tech Refreshing. Discover our mission to make open-source accessible to everyone.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Linux Distro Chooser</h1>
      
      <div className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-6">
        <p>
          Linux Distro Chooser was created with a singular mission: to make the vast and sometimes overwhelming world of Linux accessible to everyone. Whether you are an experienced system administrator or someone completely new to the concept of open-source operating systems, our tools are designed to point you in the right direction.
        </p>
        
        <h2>Our Story</h2>
        <p>
          The sheer number of Linux distributions (often called &quot;distros&quot;) is both the greatest strength and the most common barrier to entry for the Linux community. Users often face &quot;analysis paralysis&quot; trying to decision between Ubuntu, Fedora, Arch, and hundreds of others.
        </p>
        <p>
          We realized that by asking a few targeted questions about hardware, use cases, and experience level, we could systematically filter out the noise and provide highly accurate recommendations.
        </p>

        <h2>Created by Tech Refreshing</h2>
        <p>
          This project is proudly built and maintained by <a href="https://techrefreshing.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Tech Refreshing</a>. We are passionate about open-source software, digital privacy, and helping users take control of their technology.
        </p>

        <h2>Why Open Source?</h2>
        <p>
          Open-source software isn&apos;t just about being free (as in price). It&apos;s about transparency, community security, and longevity. By switching to Linux, you join a global community dedicated to creating better, safer code without invasive telemetry or forced obsolescence.
        </p>
      </div>
    </div>
  );
}
