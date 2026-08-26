
export default function CoreSkills() {
  const skillCategories = [
    {
      title: "MACHINE LEARNING & AI",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "Large Language Models (LLMs)", "AI Automation", "Knowledge Distillation", "Image Processing", "Model Evaluation"]
    },
    {
      title: "FRAMEWORKS & LIBRARIES",
      skills: ["PyTorch", "Scikit-learn", "OpenCV", "NumPy", "Pandas"]
    },
    {
      title: "AI & AUTOMATION",
      skills: ["n8n", "RAG", "LLM-powered Applications", "AI APIs", "Workflow Automation", "Retrieval-Augmented Generation"]
    },
    {
      title: "PROGRAMMING",
      skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "DEVELOPMENT & TOOLS",
      skills: ["Git", "GitHub", "React", "Vite", "REST APIs", "Power BI"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative ML nodes background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="#EC9C9D" strokeWidth="0.5" fill="none" />
          <path d="M20,80 Q50,40 80,80" stroke="#AA7F66" strokeWidth="0.5" fill="none" />
          <circle cx="10" cy="50" r="1" fill="#EC9C9D" />
          <circle cx="50" cy="50" r="1.5" fill="#AA7F66" />
          <circle cx="90" cy="50" r="1" fill="#EC9C9D" />
          <circle cx="20" cy="80" r="1" fill="#EC9C9D" />
          <circle cx="80" cy="80" r="1" fill="#EC9C9D" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-text-cream mb-4">CORE SKILLS</h2>
          <div className="w-24 h-px bg-sakura mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 hover:border-sakura/50 transition-colors duration-500">
              <h3 className="text-sakura text-xs uppercase tracking-widest mb-6 font-medium border-b border-aloewood/30 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-brand-bg border border-aloewood/50 px-3 py-1.5 rounded-md text-text-beige text-xs font-sans hover:bg-sakura hover:text-dark-chocolate hover:border-sakura transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
