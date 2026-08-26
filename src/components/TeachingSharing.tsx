import { Presentation } from 'lucide-react';

export default function TeachingSharing() {
  return (
    <section className="py-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-8 flex items-center gap-4">
          <span className="w-12 h-px bg-sakura"></span>
          TEACHING & KNOWLEDGE SHARING
        </h2>

        <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="w-16 h-16 rounded-full bg-brand-bg border border-sakura/30 flex items-center justify-center text-sakura shrink-0">
            <Presentation size={32} strokeWidth={1.5} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-sans bg-sakura text-dark-chocolate px-2 py-1 rounded font-medium tracking-wide uppercase">
                15-Minute Weekday Sessions
              </span>
              <span className="text-milk-tea text-xs font-sans uppercase tracking-widest">
                Web Development with SWAG
              </span>
            </div>
            <h3 className="text-xl font-serif font-medium text-text-cream mb-3">
              Topic: Introduction to HTML — Tags and Elements
            </h3>
            <p className="text-text-beige text-[15px] font-sans leading-relaxed max-w-3xl mb-4">
              Conducted a short student-led introductory session covering HTML fundamentals, tags and elements.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Technical Knowledge', 'Communication', 'Leadership', 'Mentoring'].map((tag, idx) => (
                <span key={idx} className="bg-brand-bg-card-hover border border-aloewood/50 text-text-beige text-[11px] uppercase tracking-wider px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
