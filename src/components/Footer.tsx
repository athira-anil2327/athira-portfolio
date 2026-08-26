import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-bg relative mt-20 pt-20 pb-10 px-6 md:px-12 border-t border-aloewood/20 overflow-hidden">
      {/* Decorative blossom background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sakura/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-milk-tea/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16 z-10 relative">
        
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-cream mb-6 leading-tight">
            LET'S BUILD SOMETHING <br/><span className="text-sakura">INTELLIGENT.</span>
          </h2>
          <p className="text-text-beige font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Interested in AI, machine learning, computer vision, automation or building something meaningful together? Let's connect.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/athira-anil-562937290" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 contact-btn-linkedin transition-colors font-medium px-6 py-3 rounded-full">
              LinkedIn <ArrowUpRight size={18} />
            </a>
            <a href="https://github.com/athira-anil2327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 contact-btn-github transition-colors font-medium px-6 py-3 rounded-full">
              GitHub <ArrowUpRight size={18} />
            </a>
            <a href="mailto:athiraanilansu@gmail.com" className="inline-flex items-center gap-2 contact-btn-email transition-colors font-medium px-6 py-3 rounded-full">
              Email Me <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm font-sans text-milk-tea">
          <a href="#home" className="hover:text-sakura transition-colors">Home</a>
          <a href="#about" className="hover:text-sakura transition-colors">About</a>
          <a href="#projects" className="hover:text-sakura transition-colors">Projects</a>
          <a href="#experience" className="hover:text-sakura transition-colors">Experience</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-6 border-t border-aloewood/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-milk-tea z-10 relative">
        <p>© 2026 Athira Adiparambil Anil. All rights reserved.</p>
        <p>Designed & Built with <span className="text-sakura">♥</span></p>
      </div>
    </footer>
  );
}
