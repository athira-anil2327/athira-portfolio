import { Award, Trophy, Medal } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "TOP 10 FINALIST — EUPHORIA '24",
      description: "Selected among the Top 10 finalists in the UG Coding Event at Euphoria '24, a national-level tech fest.",
      icon: Trophy,
    },
    {
      title: "MACHINE LEARNING AND DEEP LEARNING",
      subtitle: "Fundamentals and Applications — NPTEL Certification",
      icon: Award,
    },
    {
      title: "INTEL UNNATI INDUSTRIAL TRAINING",
      subtitle: "Machine Learning Internship Certification",
      icon: Medal,
    }
  ];

  return (
    <section className="py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-sakura"></span>
          ACHIEVEMENTS & CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card p-6 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-brand-bg border border-sakura/30 flex items-center justify-center text-sakura mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-sans font-medium text-text-cream tracking-wide uppercase mb-2">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-sakura text-[11px] font-sans uppercase tracking-widest mb-2">{item.subtitle}</p>
                )}
                {item.description && (
                  <p className="text-text-beige text-sm font-sans leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
