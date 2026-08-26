import { Compass } from 'lucide-react';

export default function CurrentlyExploring() {
  const topics = [
    "Generative AI",
    "LLM Applications",
    "RAG",
    "AI Automation",
    "n8n",
    "Computer Vision",
    "Smart City AI",
    "Deep Learning"
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-brand-bg">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 text-sakura mb-4">
          <Compass size={20} className="animate-spin-slow" style={{ animationDuration: '4s' }} />
          <span className="text-xs uppercase tracking-widest font-medium">Currently Exploring</span>
        </div>
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-12">
          What I'm Learning & Building
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="glass-card px-6 py-3 hover:-translate-y-1 hover:border-sakura/50 hover:bg-brand-bg-card-hover transition-all duration-300 cursor-default shadow-sm"
            >
              <span className="text-text-cream font-sans text-sm tracking-wide">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
