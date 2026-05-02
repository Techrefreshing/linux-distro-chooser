import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Distro Chooser Engine',
  description: 'Answer 3 simple questions to find your perfect Linux match based on your hardware, experience level, and use case.',
};

export default function ChooserLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
