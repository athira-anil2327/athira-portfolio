import { BrainCircuit, Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: BrainCircuit, value: '10+', label: 'Projects' },
    { icon: Briefcase, value: '3+', label: 'Internships / Industry Experiences' },
    { icon: Award, value: '5+', label: 'Certifications & Milestones' },
    { icon: GraduationCap, value: '8.57', label: 'GPA / 10' },
  ];

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto glass-card py-10 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-aloewood/30">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4 space-y-3">
              <stat.icon size={32} strokeWidth={1.5} className="text-sakura mb-2" />
              <h3 className="text-4xl font-serif font-bold text-text-cream">{stat.value}</h3>
              <p className="text-sm font-sans text-milk-tea uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
