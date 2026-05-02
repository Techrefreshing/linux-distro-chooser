import { Server, MonitorPlay, ShieldPlus, Code } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Linux Services',
  description: 'Expert Linux consulting, server migration, desktop transitions, security auditing, and custom automation services by Tech Refreshing.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: 'Server Migration & Setup',
      description: 'Expert assistance in migrating your existing infrastructure to robust Linux servers (Debian, Ubuntu Server, AlmaLinux). We handle security hardening, containerization, and automated deployments.'
    },
    {
      icon: <MonitorPlay className="w-8 h-8 text-blue-600" />,
      title: 'Desktop Linux Transitions',
      description: 'Corporate or individual transitions from Windows/macOS to Linux. We help select the right distro, set up Active Directory integrations, and ensure software compatibility through Wine/Proton or native alternatives.'
    },
    {
      icon: <ShieldPlus className="w-8 h-8 text-blue-600" />,
      title: 'Security Auditing',
      description: 'Comprehensive security audits of your Linux infrastructure. We review firewall configurations, SELinux/AppArmor policies, SSH hardening, and patch management processes.'
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Custom Shell Scripting & Automation',
      description: 'Need to automate complex deployment workflows? We write robust Bash/Python scripts and Ansible playbooks tailored to your exact operational requirements.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Services</h1>
        <p className="text-lg text-gray-600">
          Beyond our free recommendation engine, the team at Tech Refreshing offers professional consulting and implementation services for individuals and enterprises.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border text-gray-900 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gray-900 rounded-3xl p-10 text-center max-w-4xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to upgrade your infrastructure?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Contact our team today to discuss your specific needs and receive a tailored proposal.</p>
        <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
          Contact Consulting Team
        </a>
      </div>
    </div>
  );
}
