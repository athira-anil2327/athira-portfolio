import { Megaphone, CalendarCheck, Share2 } from 'lucide-react';

export default function LeadershipCommunity() {
  const roles = [
    {
      role: 'MARKETING & PROMOTION HEAD',
      org: 'Open Source Club',
      year: '2026–27',
      description: 'Leading marketing and promotional activities while contributing to open-source culture, community building and student engagement.',
      icon: Megaphone,
    },
    {
      role: 'PROGRAM & EVENT COORDINATOR',
      org: 'Saintgits Web and App Development Group (SWAG)',
      year: '2025-27',
      description: 'Program and event coordination for a student-led technical community focused on making web development accessible, engaging and collaborative. Organized learning sessions and technical activities.',
      icon: CalendarCheck,
    },
    {
      role: 'MEDIA HEAD',
      org: 'ACM Student Chapter',
      year: '2025-26',
      description: 'Contributed to technical-community initiatives, event promotion, media and student engagement. Conducted a National level hackathon "Ascend" and worked on its media control, poster development and video promotion.',
      icon: Share2,
    },
  ];

  const timeline = [
    "DESIGN TEAM MEMBER",
    "MARKETING & MEDIA / PROMOTION LEAD",
    "PROGRAM & EVENT COORDINATOR",
    "MEDIA HEAD / COMMUNITY LEADERSHIP"
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-brand-bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-sakura"></span>
          LEADERSHIP & COMMUNITY
        </h2>

        {/* Leadership Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card p-8 flex flex-col hover:border-sakura/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-brand-bg border border-aloewood flex items-center justify-center text-milk-tea">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-sm font-sans font-medium text-sakura tracking-wide uppercase">{item.role}</h3>
                      {item.year && (
                        <div className="shrink-0 text-[10px] text-milk-tea tracking-widest uppercase border border-aloewood/30 px-2 py-1 rounded">
                          {item.year}
                        </div>
                      )}
                    </div>
                    <p className="text-text-cream text-xs font-serif italic mt-1">{item.org}</p>
                  </div>
                </div>
                <p className="text-text-beige text-[14px] font-sans leading-relaxed">
                  {item.description}
                </p>
                {item.org === 'Open Source Club' && (
                  <p className="text-text-beige text-[13px] font-sans italic mt-4 opacity-80 border-t border-aloewood/30 pt-3">
                    * Previously served as Design Team Member.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Leadership Progression Timeline */}
        <div className="mt-12 glass-card p-8">
          <p className="text-sakura text-xs uppercase tracking-widest mb-8 font-medium text-center">Leadership Progression</p>
          <div className="flex flex-col md:flex-row items-start justify-between relative max-w-5xl mx-auto">
            {/* Connecting Line (desktop only) */}
            <div className="hidden md:block absolute top-2 left-0 w-full h-px bg-aloewood/30 z-0"></div>
            
            {timeline.map((stage, index) => (
              <div key={index} className="flex flex-col items-center z-10 w-full md:w-auto relative mb-8 md:mb-0">
                {/* Connecting Line (mobile only) */}
                {index !== timeline.length - 1 && (
                  <div className="md:hidden absolute top-8 left-1/2 w-px h-12 bg-aloewood/30 -translate-x-1/2 z-0"></div>
                )}
                <div className="w-4 h-4 rounded-full bg-brand-bg border-2 border-sakura mb-4 shadow-[0_0_10px_rgba(var(--color-sakura-rgb),0.3)]"></div>
                <p className="text-[10px] sm:text-xs font-sans text-text-cream uppercase tracking-widest text-center max-w-[150px]">
                  {stage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
