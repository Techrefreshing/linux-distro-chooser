import { distributions } from '@/lib/data';
import { Cpu, HardDrive, Layout, Server, Download, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detailed Distro Comparison',
  description: 'Compare hardware requirements, resource utilization, package managers, and update models across all major Linux distributions.',
};

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Detailed Comparison</h1>
        <p className="text-lg text-gray-600 mb-2">
          Compare hardware requirements, resource utilization, package managers, and more across all major distributions.
        </p>
        <p className="inline-flex items-center text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <Shield className="w-4 h-4 mr-1.5" /> Data officially verified and updated as of April 2026
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 font-semibold text-gray-900 rounded-tl-2xl w-[200px]">Distribution</th>
              <th className="p-4 font-semibold text-gray-900 w-[150px]">Base / Family</th>
              <th className="p-4 font-semibold text-gray-900 w-[250px]">Resource Utilization (Idle)</th>
              <th className="p-4 font-semibold text-gray-900 w-[200px]">Reqs (RAM / Storage)</th>
              <th className="p-4 font-semibold text-gray-900 w-[150px]">Package Mgr</th>
              <th className="p-4 font-semibold text-gray-900 w-[150px]">Update Model</th>
              <th className="p-4 font-semibold text-gray-900 rounded-tr-2xl w-[100px]">Support</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {distributions.map((distro) => (
              <tr key={distro.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-gray-900 text-lg">{distro.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{distro.experienceLevel}</div>
                </td>
                <td className="p-4 text-sm text-gray-700">{distro.family}</td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-700">
                      <Layout className="w-4 h-4 mr-2 text-gray-400" /> RAM: {distro.resourceUtilization.idleRam}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Cpu className="w-4 h-4 mr-2 text-gray-400" /> CPU: {distro.resourceUtilization.idleCpu}
                    </div>
                    <div className="text-xs text-gray-500 mt-2 italic max-w-xs">{distro.resourceUtilization.notes}</div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-700">
                      <Layout className="w-4 h-4 mr-2 text-gray-400" /> {distro.hardwareReqs.minRam}
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <HardDrive className="w-4 h-4 mr-2 text-gray-400" /> {distro.hardwareReqs.minStorage}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {distro.packageManagers.map(pkg => (
                      <span key={pkg} className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs font-mono text-gray-700">
                        {pkg}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-sm font-medium text-gray-700">{distro.updateModel}</td>
                <td className="p-4 text-sm text-gray-600 line-clamp-3" title={distro.communitySupport}>
                  {distro.communitySupport.length > 50 ? distro.communitySupport.substring(0, 50) + '...' : distro.communitySupport}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a tailored recommendation?</h3>
          <p className="text-blue-800">Don't want to parse all this data? Our recommendation engine does the heavy lifting for you.</p>
        </div>
        <a href="/chooser" className="shrink-0 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Launch Chooser
        </a>
      </div>
    </div>
  );
}
