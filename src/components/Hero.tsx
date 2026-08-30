import { Mail, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-sakura/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-misty-rose/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sakura tracking-widest font-medium text-sm font-sans uppercase">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text-cream leading-tight">
              Athira <br/>
              <span className="text-sakura text-shadow-glow">Adiparambil Anil</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-sans font-light text-text-beige tracking-wide">
              AI / MACHINE LEARNING ENTHUSIAST
            </h2>
          </div>

          <p className="text-lg text-text-beige font-sans max-w-xl leading-relaxed">
            Turning data into intelligent solutions.<br/>
            I build machine learning systems, AI-powered applications and automation workflows that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-sakura text-dark-chocolate px-8 py-3 rounded-full font-medium transition-all hover:bg-text-cream hover:text-dark-chocolate hover:scale-105"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a 
              href="/resume/Athira_Anil_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-milk-tea text-text-cream px-8 py-3 rounded-full font-medium transition-all hover:bg-milk-tea/20 hover:border-milk-tea"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="pt-8 flex items-center gap-6">
            <span className="text-sm font-sans text-milk-tea uppercase tracking-widest">Let's connect:</span>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/athira-anil-562937290" target="_blank" rel="noopener noreferrer" className="text-text-beige hover:text-sakura transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/athira-anil2327" target="_blank" rel="noopener noreferrer" className="text-text-beige hover:text-sakura transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:athiraanilansu@gmail.com" className="text-text-beige hover:text-sakura transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* Outline ring */}
            <div className="absolute inset-0 border border-milk-tea/50 organic-shape scale-110"></div>
            <div className="absolute inset-0 border border-sakura/30 organic-shape scale-105 animation-delay-2000"></div>
            
            {/* Image container */}
            <div className="absolute inset-0 overflow-hidden organic-shape bg-aloewood/20">
              <img 
                src="/images/me.png" 
                alt="Athira Adiparambil Anil" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 p-4 max-w-[250px] shadow-2xl z-20 animate-bounce-slow bg-dark-chocolate/75 backdrop-blur-md border border-aloewood rounded-2xl">
              <p className="text-xs md:text-sm font-serif italic text-text-cream leading-relaxed">
                “<span className="text-sakura">Passionate</span> about building AI-driven solutions that create real impact.”
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
