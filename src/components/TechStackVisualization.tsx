export default function TechStackVisualization() {
  const tech = [
    "PyTorch", "Python", "OpenCV", "Scikit-learn", 
    "n8n", "RAG", "LLMs", "Computer Vision", 
    "Generative AI", "SQL", "Git/GitHub"
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-16 text-center">
          TECHNOLOGY STACK
        </h2>

        <div className="relative w-full max-w-[600px] aspect-square md:aspect-[3/2] flex items-center justify-center">
          {/* Orbital rings */}
          <div className="absolute inset-0 border border-aloewood/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-8 border border-sakura/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
          <div className="absolute inset-16 border border-milk-tea/20 rounded-full animate-[spin_50s_linear_infinite]"></div>

          {/* Center */}
          <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-dark-chocolate border border-sakura shadow-[0_0_30px_rgba(var(--color-sakura-rgb),0.2)] flex items-center justify-center text-center">
            <span className="text-sakura font-serif font-bold text-xl md:text-2xl">AI / ML</span>
          </div>

          {/* Floating tech nodes */}
          {tech.map((item, index) => {
            const angle = (index * (360 / tech.length)) * (Math.PI / 180);
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 180;
            // Adjust radius slightly for some variation
            const finalRadius = radius + (index % 2 === 0 ? 20 : -20);
            
            const x = Math.cos(angle) * finalRadius;
            const y = Math.sin(angle) * finalRadius;

            return (
              <div 
                key={index}
                className="absolute z-10 glass-card px-3 py-1.5 md:px-4 md:py-2 whitespace-nowrap hover:border-sakura/50 hover:z-30 transition-all hover:scale-110 cursor-default"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <span className="text-text-beige text-[11px] md:text-sm font-sans tracking-wide">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
