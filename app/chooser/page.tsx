'use client';

import { useState } from 'react';
import { distributions, ExperienceLevel, UseCase } from '@/lib/data';
import * as motion from 'motion/react-client';
import { ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const OptionButton = ({ onClick, selected, children }: { onClick: () => void, selected: boolean, children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
      selected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
    }`}
  >
    <div className="flex items-center justify-between">
      <span className="text-lg font-medium text-gray-900">{children}</span>
      {selected && <CheckCircle2 className="w-6 h-6 text-blue-600" />}
    </div>
  </button>
);

export default function ChooserPage() {
  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState<ExperienceLevel | null>(null);

  const [primaryUseCase, setPrimaryUseCase] = useState<UseCase | null>(null);
  const [hardware, setHardware] = useState<'Modern' | 'Older/Low-end' | null>(null);

  const handleReset = () => {
    setStep(1);
    setExperience(null);
    setPrimaryUseCase(null);
    setHardware(null);
  }

  const getRecommendations = () => {
    let matches = distributions;

    // Filter by experience highly
    if (experience === 'Beginner') {
      matches = matches.filter(d => d.experienceLevel === 'Beginner' || d.id === 'manjaro');
    } else if (experience === 'Intermediate') {
      matches = matches.filter(d => d.experienceLevel !== 'Expert');
    }

    // Sort by use case match
    if (primaryUseCase) {
      matches.sort((a, b) => {
        const aHas = a.useCases.includes(primaryUseCase) ? 1 : 0;
        const bHas = b.useCases.includes(primaryUseCase) ? 1 : 0;
        return bHas - aHas;
      });
    }

    // Hardware tie break
    if (hardware === 'Older/Low-end') {
      matches = matches.filter(d => d.defaultDEs.includes('XFCE') || d.defaultDEs.includes('MATE') || d.defaultDEs.includes('LXDE') || d.id === 'debian' || d.id === 'arch');
    }

    return matches.slice(0, 3);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Recommendation Engine</h1>
        <p className="text-lg text-gray-600">Answer 3 simple questions to find your perfect Linux match.</p>
        
        {step <= 3 && (
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-2 w-16 rounded-full ${step >= i ? 'bg-blue-600' : 'bg-gray-200'}`} />
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is your Linux experience level?</h2>
            <div className="space-y-4">
              <OptionButton selected={experience === 'Beginner'} onClick={() => setExperience('Beginner')}>
                Beginner (Coming from Windows/macOS, want it to just work)
              </OptionButton>
              <OptionButton selected={experience === 'Intermediate'} onClick={() => setExperience('Intermediate')}>
                Intermediate (Used Linux before, comfortable with basic terminal)
              </OptionButton>
              <OptionButton selected={experience === 'Advanced'} onClick={() => setExperience('Advanced')}>
                Advanced (Know my way around, want customization)
              </OptionButton>
              <OptionButton selected={experience === 'Expert'} onClick={() => setExperience('Expert')}>
                Expert (Build from scratch, complete control)
              </OptionButton>
            </div>
            <button 
              disabled={!experience}
              onClick={() => setStep(2)}
              className="mt-8 w-full bg-gray-900 text-white py-4 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition"
            >
              Next Step
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What will be your primary use case?</h2>
            <div className="space-y-4">
              <OptionButton selected={primaryUseCase === 'Daily Desktop'} onClick={() => setPrimaryUseCase('Daily Desktop')}>
                Daily Desktop (Browsing, office work, multimedia)
              </OptionButton>
              <OptionButton selected={primaryUseCase === 'Gaming'} onClick={() => setPrimaryUseCase('Gaming')}>
                Gaming (Steam, Proton, latest drivers)
              </OptionButton>
              <OptionButton selected={primaryUseCase === 'Development'} onClick={() => setPrimaryUseCase('Development')}>
                Development (Programming, containers, tooling)
              </OptionButton>
              <OptionButton selected={primaryUseCase === 'Server'} onClick={() => setPrimaryUseCase('Server')}>
                Server Hosting (Headless, web hosting, stable base)
              </OptionButton>
              <OptionButton selected={primaryUseCase === 'Privacy/Security'} onClick={() => setPrimaryUseCase('Privacy/Security')}>
                Privacy/Security (Hardened, penetration testing)
              </OptionButton>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setStep(1)} className="px-6 py-4 rounded-xl font-medium border border-gray-200 hover:bg-gray-50">Back</button>
              <button 
                disabled={!primaryUseCase}
                onClick={() => setStep(3)}
                className="flex-1 bg-gray-900 text-white py-4 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition"
              >
                Next Step
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What kind of hardware are you installing on?</h2>
            <div className="space-y-4">
              <OptionButton selected={hardware === 'Modern'} onClick={() => setHardware('Modern')}>
                Modern (4GB+ RAM, multi-core CPU, SSD)
              </OptionButton>
              <OptionButton selected={hardware === 'Older/Low-end'} onClick={() => setHardware('Older/Low-end')}>
                Older/Low-end (&lt; 4GB RAM, old CPU, HDD)
              </OptionButton>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setStep(2)} className="px-6 py-4 rounded-xl font-medium border border-gray-200 hover:bg-gray-50">Back</button>
              <button 
                disabled={!hardware}
                onClick={() => setStep(4)}
                className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition"
              >
                Get Recommendations
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Your Top Matches</h2>
              <p className="text-gray-600 mt-2">Based on your answers, here are the best options for you.</p>
            </div>

            <div className="space-y-6">
              {getRecommendations().map((distro, index) => (
                <div key={distro.id} className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm overflow-hidden">
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg uppercase tracking-wider">
                      Top Match
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="w-16 h-16 shrink-0 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden relative">
                      <Image
                        src={`https://www.google.com/s2/favicons?domain=${new URL(distro.websiteUrl).hostname}&sz=128`}
                        alt={`${distro.name} logo`}
                        fill
                        className="object-contain p-2"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900">{distro.name}</h3>
                      <p className="text-gray-600 mt-1">{distro.shortDescription}</p>
                      
                      <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:items-center font-mono text-xs text-gray-500">
                        <span className="bg-gray-100 px-3 py-1.5 rounded-md">DE: 
                          <span className="font-bold text-gray-800 ml-1">
                            {hardware === 'Older/Low-end' ? (distro.defaultDEs.find(de => de === 'XFCE' || de === 'MATE' || de === 'LXDE') || distro.defaultDEs[0]) : distro.defaultDEs[0]}
                          </span>
                        </span>
                        <span className="bg-gray-100 px-3 py-1.5 rounded-md">Pkg: <span className="font-bold text-gray-800 ml-1">{distro.packageManagers[0]}</span></span>
                      </div>
                    </div>
                    <div className="shrink-0 w-full sm:w-auto">
                      <a 
                        href={distro.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto block text-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button onClick={handleReset} className="inline-flex items-center text-blue-600 font-medium hover:underline">
                <RotateCcw className="w-4 h-4 mr-2" /> Start Over
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
