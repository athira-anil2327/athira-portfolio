import { BrainCircuit, Eye, Sparkles, Workflow } from 'lucide-react';

export default function WhatIBuild() {
  const areas = [
    {
      title: 'MACHINE LEARNING',
      description: 'Developing and experimenting with ML and deep learning models for real-world applications.',
      icon: BrainCircuit,
    },
    {
      title: 'COMPUTER VISION',
      description: 'Image enhancement, object detection, vehicle detection, tracking and visual analysis.',
      icon: Eye,
    },
    {
      title: 'GENERATIVE AI',
      description: 'Building applications using LLMs, RAG pipelines and AI-powered workflows.',
      icon: Sparkles,
    },
    {
      title: 'AI AUTOMATION',
      description: 'Designing intelligent workflows and automation systems using tools such as n8n and modern AI APIs.',
      icon: Workflow,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-sakura"></span>
          WHAT I BUILD
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index} 
                className="glass-card p-8 hover:-translate-y-2 transition-transform duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-bg border border-sakura/30 flex items-center justify-center text-sakura mb-6 group-hover:bg-sakura group-hover:text-dark-chocolate transition-colors duration-500">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-sans font-medium text-text-cream tracking-widest uppercase mb-3">
                  {area.title}
                </h3>
                <p className="text-text-beige text-sm font-sans leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
