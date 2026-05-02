import { distributions } from '@/lib/data';
import { ShieldCheck, Lock, Key, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linux Security 101 & Best Practices',
  description: 'Learn fundamental Linux security practices and explore distribution-specific security guidelines to keep your open-source system safe.',
};

export default function SecurityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
          <ShieldCheck className="w-10 h-10 mr-4 text-blue-600" />
          Linux Security 101
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          While Linux is inherently more secure than many alternative operating systems, it is not impervious. Proper configuration and understanding your distribution's specific security paradigms are essential.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <Lock className="w-8 h-8 text-gray-700 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Full Disk Encryption (LUKS)</h3>
          <p className="text-sm text-gray-600">Always opt-in for full disk encryption during installation. If your laptop is stolen, LUKS ensures your data remains inaccessible without the passphrase.</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <Key className="w-8 h-8 text-gray-700 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Principle of Least Privilege</h3>
          <p className="text-sm text-gray-600">Never run as root. Utilize `sudo` or `doas` for administrative tasks. For servers, always disable root SSH login.</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <AlertTriangle className="w-8 h-8 text-gray-700 mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Package Trust</h3>
          <p className="text-sm text-gray-600">Only install software from official repositories. Be highly cautious when adding PPAs (Ubuntu) or using the AUR (Arch Linux).</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Distribution-Specific Best Practices</h2>
      
      <div className="space-y-8">
        {distributions.map((distro) => (
          <div key={distro.id} className="bg-white border text-gray-900 border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold">{distro.name}</h3>
              <span className="ml-4 px-3 py-1 bg-gray-100 rounded-full text-xs font-mono font-medium text-gray-600 border border-gray-200">
                {distro.family}
              </span>
            </div>
            
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              {distro.securityPractices.map((practice, index) => (
                <li key={index} className="leading-relaxed pl-2 relative">
                  <span className="relative -left-2">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
