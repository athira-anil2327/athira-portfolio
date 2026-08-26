import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Theme state
  const [theme, setTheme] = useState('dark');
  
  // Popups state
  const [showThemePopup, setShowThemePopup] = useState(false);
  
  // Refs for clicking outside
  const themeContainerRef = useRef<HTMLDivElement>(null);

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
    
    // Popups init
    const themePopupDismissed = localStorage.getItem('theme-popup-dismissed');
    
    if (!themePopupDismissed) {
      setTimeout(() => setShowThemePopup(true), 1500);
    }
    
    // Click outside listener
    const handleClickOutside = (e: MouseEvent) => {
      if (
        showThemePopup && 
        themeContainerRef.current && 
        !themeContainerRef.current.contains(e.target as Node)
      ) {
        dismissThemePopup();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showThemePopup]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    
    if (showThemePopup) dismissThemePopup();
  };

  const dismissThemePopup = () => {
    setShowThemePopup(false);
    localStorage.setItem('theme-popup-dismissed', 'true');
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
          
          {/* Theme Toggle & Popup Wrapper */}
          <div ref={themeContainerRef} className="relative flex items-center justify-center">
            <button 
              onClick={toggleTheme}
              className="text-text-beige hover:text-sakura transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {showThemePopup && (
              <div className="absolute top-full right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 mt-6 pointer-events-auto w-[240px] p-4 rounded-xl shadow-xl border animate-in fade-in slide-in-from-top-4 duration-500 transition-all bg-dark-chocolate border-milk-tea text-text-cream z-50">
                <button onClick={dismissThemePopup} className="absolute top-2 right-2 opacity-60 hover:opacity-100 transition-opacity">
                  <X size={14} />
                </button>
                {/* Arrow pointing exactly at the center of the theme icon */}
                <div className="absolute -top-2 right-[6px] md:right-auto md:left-1/2 md:-translate-x-1/2 w-4 h-4 rotate-45 border-l border-t bg-dark-chocolate border-milk-tea"></div>
                
                <h4 className="font-serif font-bold text-base mb-1 flex items-center gap-1">
                  A little lighter? ✨
                </h4>
                <p className="text-xs font-sans opacity-90 leading-relaxed mb-3">
                  Tap the ☀ icon whenever you want to switch to my matcha side.
                </p>
                <button onClick={dismissThemePopup} className="text-xs font-medium uppercase tracking-widest text-sakura hover:opacity-80 transition-opacity">
                  Got it ✕
                </button>
              </div>
            )}
          </div>
          
          {/* Let's Connect */}
          <div className="relative hidden md:flex items-center justify-center">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-transparent border border-sakura text-text-cream hover:bg-sakura hover:text-dark-chocolate hover:border-sakura transition-all duration-300 font-medium tracking-wide text-sm"
            >
              Let's Connect
            </a>
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
