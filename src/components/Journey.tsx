export default function Journey() {
  const milestones = [
    { title: "Smart City ML Research Internship", type: "Research" },
    { title: "AI Internship at Novox Edtech", type: "Experience" },
    { title: "Technical learning sessions", type: "Sharing" },
    { title: "Open Source Club Marketing & Promotion Head", type: "Leadership" },
    { title: "SWAG Program & Event Coordinator", type: "Leadership" },
    { title: "Intel Unnati Industrial Training", type: "Experience" },
    { title: "NPTEL Machine Learning & Deep Learning certification", type: "Learning" },
    { title: "Web Development Internship at Cydez Technologies", type: "Experience" },
    { title: "Top 10 finalist at Euphoria '24", type: "Achievement" },
    { title: "Open Source Club Design Team", type: "Community" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden bg-brand-bg-card/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-4 flex items-center gap-4">
          <span className="w-12 h-px bg-sakura"></span>
          BUILDING • LEARNING • SHARING
        </h2>
        <p className="text-milk-tea font-sans mb-12">Key milestones, experiences, and community involvement.</p>

        <div className="relative border-l border-aloewood ml-4 md:ml-6 space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-8 group">
              <div className="absolute w-3 h-3 bg-brand-bg border border-sakura rounded-full -left-[6.5px] top-1.5 group-hover:bg-sakura transition-colors shadow-[0_0_10px_rgba(var(--color-sakura-rgb),0.3)]"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between glass-card p-5 hover:border-sakura/30 transition-colors">
                <p className="text-text-cream font-sans text-[15px] font-medium">{milestone.title}</p>
                <span className="mt-2 sm:mt-0 text-[10px] uppercase tracking-widest text-milk-tea bg-brand-bg px-2 py-1 rounded border border-aloewood/30 w-max">
                  {milestone.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
