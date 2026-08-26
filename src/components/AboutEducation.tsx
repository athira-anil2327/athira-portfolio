import { ArrowRight, BookOpen } from 'lucide-react';

export default function AboutEducation() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-sakura"></span>
          ABOUT & EDUCATION
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About Me */}
          <div className="glass-card p-10 flex flex-col justify-between hover:border-sakura/50 transition-colors duration-500">
            <div>
              <p className="text-sakura text-xs uppercase tracking-widest mb-6 font-medium">About Me</p>
              <div className="text-text-beige font-sans leading-relaxed text-[15px] space-y-4 mb-8">
                <p>
                  I am a Computer Science undergraduate at Saintgits College of Engineering, pursuing Honours in Machine Learning. My primary focus is on <strong className="text-text-cream font-medium font-normal">Artificial Intelligence, Machine Learning and Computer Vision</strong>.
                </p>
                <p>
                  I have practical experience with deep learning and image processing, including implementing knowledge distillation using PyTorch. Through academic research, I have also contributed to smart-city traffic optimization projects.
                </p>
                <p>
                  Beyond traditional ML, I actively build <strong className="text-text-cream font-medium font-normal">AI-powered applications and automation workflows</strong>. I experiment with Generative AI, LLM applications, RAG, and AI automation.
                </p>
                <p>
                  I am passionate about applying machine learning to real-world problems and am comfortable working across both AI/ML and software development to bring ideas to life.
                </p>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-2 text-text-cream font-medium hover:text-sakura transition-colors w-max group">
              Know More About Me 
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Education */}
          <div className="glass-card p-10 hover:border-sakura/50 transition-colors duration-500">
            <p className="text-sakura text-xs uppercase tracking-widest mb-6 font-medium">Education</p>
            
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-aloewood/50">
                <div className="absolute w-3 h-3 bg-sakura rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(var(--color-sakura-rgb),0.8)]"></div>
                <h3 className="text-xl font-serif text-text-cream font-medium mb-1">B.Tech in Computer Science Engineering</h3>
                <p className="text-milk-tea text-sm mb-3 font-sans">Saintgits College of Engineering (Autonomous), Kottayam, Kerala</p>
                <div className="inline-block bg-brand-bg-card-hover border border-aloewood/30 rounded-full px-3 py-1 text-xs text-text-cream mb-4 font-medium">
                  Expected Graduation: March 2027 | GPA: 8.57 / 10
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-text-beige text-sm">
                    <BookOpen size={16} className="text-sakura shrink-0 mt-0.5" />
                    <span>Honours in Machine Learning</span>
                  </li>
                  <li className="flex items-start gap-2 text-text-beige text-sm">
                    <BookOpen size={16} className="text-sakura shrink-0 mt-0.5" />
                    <span>Minor in Computational Mathematics & Applications</span>
                  </li>
                  <li className="flex items-start gap-2 text-text-beige text-sm">
                    <BookOpen size={16} className="text-sakura shrink-0 mt-0.5" />
                    <span>Micro Specialization in Data & Computer Communications</span>
                  </li>
                </ul>
              </div>

              <div className="relative pl-6 border-l border-aloewood/50">
                <div className="absolute w-3 h-3 bg-aloewood rounded-full -left-[6.5px] top-1.5"></div>
                <h3 className="text-xl font-serif text-text-cream font-medium mb-1">12th Grade — Science Stream (PCBM)</h3>
                <p className="text-milk-tea text-sm mb-2 font-sans">Sree Narayana Higher Secondary School, Kattingachira, Thrissur</p>
                <p className="text-milk-tea text-sm font-sans">2021–2023 | 97.4%</p>
              </div>

              <div className="relative pl-6 border-l border-aloewood/50">
                <div className="absolute w-3 h-3 bg-aloewood rounded-full -left-[6.5px] top-1.5"></div>
                <h3 className="text-xl font-serif text-text-cream font-medium mb-1">10th Grade — CBSE</h3>
                <p className="text-milk-tea text-sm mb-2 font-sans">Santhinikethan Public School, IJK</p>
                <p className="text-milk-tea text-sm font-sans">2020–2021 | 92.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
