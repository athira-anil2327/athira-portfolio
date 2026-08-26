import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Theme state
  const [theme, setTheme] = useState('dark');
  
  const [showThemePopup, setShowThemePopup] = useState(false);
  
  useEffect(() => {
    // Scroll listener
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Theme init
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Auto popup for first-time session
    let showTimer: number;
    let hideTimer: number;
    const hasSeenPopup = sessionStorage.getItem('theme-popup-seen');
    
    if (!hasSeenPopup) {
      showTimer = window.setTimeout(() => {
        setShowThemePopup(true);
        hideTimer = window.setTimeout(() => {
          setShowThemePopup(false);
          sessionStorage.setItem('theme-popup-seen', 'true');
        }, 4000);
      }, 1500);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-brand-bg/95 backdrop-blur-md py-4 border-b border-aloewood/30 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold text-text-cream tracking-wider text-shadow-glow hover:text-sakura transition-colors">
          AA.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest text-text-beige hover:text-sakura transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side buttons container */}
        <div className="flex items-center space-x-6">
          
          {/* Theme Toggle & Hover Tooltip */}
          <div className="relative flex items-center justify-center group">
            <button 
              onClick={toggleTheme}
              className="text-text-beige hover:text-sakura transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Hover & Auto Tooltip Box */}
            <div className={`absolute top-full right-0 mt-3 pointer-events-none transition-opacity duration-500 p-3.5 rounded-xl shadow-xl border bg-dark-chocolate border-milk-tea text-text-cream z-50 ${showThemePopup ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              {/* Carved Arrow pointing up to the icon */}
              <div className="absolute -top-1.5 right-[4px] w-3 h-3 rotate-45 border-l border-t bg-dark-chocolate border-milk-tea"></div>
              <div className="flex flex-col gap-1 w-[180px] whitespace-normal">
                <span className="font-serif font-bold text-sm">
                  {theme === 'dark' ? 'A little lighter? ✨' : 'A little darker? 🍫'}
                </span>
                <span className="text-[11px] font-sans opacity-90 leading-relaxed text-text-beige">
                  {theme === 'dark'
                    ? 'Tap the icon whenever you want to switch to my matcha side.'
                    : 'Tap the icon whenever you want to switch to my dark chocolate side.'}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile menu placeholder */}
          <button className="md:hidden text-text-beige">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
