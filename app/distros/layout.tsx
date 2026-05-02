import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browse Linux Distributions',
  description: 'Explore our curated list of the best Linux distributions. Filter by your primary use case to find exactly what you need.',
};

export default function DistrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
