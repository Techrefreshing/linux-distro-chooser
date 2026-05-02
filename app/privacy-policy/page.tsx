import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for Linux Distro Chooser by Tech Refreshing. We respect your privacy and minimize data collection.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="prose prose-lg prose-blue max-w-none text-gray-700 space-y-6">
        <p>
          At <strong>Linux Distro Chooser</strong> (operated by Tech Refreshing), we recognize that privacy is a fundamental human right. As advocates for open-source software, we believe in minimizing data collection and maximizing transparency.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>We do not collect personal information.</strong> Our recommendation engine runs entirely locally in your web browser. When you answer questions about your experience level or hardware, that data is processed on your device and is never sent back to our servers.
        </p>
        <p>
          We use standard, privacy-respecting analytics to understand high-level traffic patterns (e.g., how many visitors view the site daily), but this data is anonymized and unlinked from your personal identity.
        </p>

        <h2>2. Cookies and Tracking</h2>
        <p>
          We do not use invasive tracking cookies. We do not use third-party advertising trackers. If any functional cookies are ever required for site operation, they will not be used for cross-site tracking.
        </p>

        <h2>3. Third-Party Links</h2>
        <p>
          Our site contains numerous direct links to download Linux distributions and visit official project websites (e.g., ubuntu.com, archlinux.org). Once you click these links and leave our site, you are subject to the privacy policies of those respective organizations. We are not responsible for the privacy practices of external sites.
        </p>

        <h2>4. Contact Form Data</h2>
        <p>
          If you choose to use our Contact Form, the information you provide (Name, Email, Message) is sent via secure email routing exclusively for the purpose of responding to your inquiry. We do not sell, rent, or share this contact data with any third parties.
        </p>

        <h2>5. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time as we add new features. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, please contact us at via the <a href="/contact">Contact Page</a> or via email at privacy@techrefreshing.com.
        </p>
      </div>
    </div>
  );
}
