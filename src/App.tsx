import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutEducation from './components/AboutEducation';
import WhatIBuild from './components/WhatIBuild';
import CoreSkills from './components/CoreSkills';
import TechStackVisualization from './components/TechStackVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import LeadershipCommunity from './components/LeadershipCommunity';
import TeachingSharing from './components/TeachingSharing';
import CurrentlyExploring from './components/CurrentlyExploring';
import Journey from './components/Journey';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-bg min-h-screen text-text-beige font-sans selection:bg-sakura selection:text-dark-chocolate relative">
      {/* Background grain texture (minimal) */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-50"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Light Theme Botanical Decorations */}
      <div className="botanical-decor fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top left leaf branch */}
        <svg className="absolute top-0 left-0 w-[400px] h-[400px] text-aloewood/10 -translate-x-1/4 -translate-y-1/4" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,190 C30,120 100,50 190,10" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M50,150 C30,120 40,80 80,70 C70,100 50,120 50,150 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
          <path d="M90,110 C80,80 110,40 150,40 C130,60 110,90 90,110 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
          <path d="M40,180 C20,160 30,130 60,120 C50,140 40,160 40,180 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
        </svg>
        {/* Bottom right leaf branch */}
        <svg className="absolute bottom-0 right-0 w-[500px] h-[500px] text-sakura/10 translate-x-1/4 translate-y-1/4 rotate-180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,190 C30,120 100,50 190,10" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
          <path d="M50,150 C30,120 40,80 80,70 C70,100 50,120 50,150 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
          <path d="M90,110 C80,80 110,40 150,40 C130,60 110,90 90,110 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
          <path d="M130,70 C120,40 160,20 190,20 C180,40 150,60 130,70 Z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
        </svg>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutEducation />
        <WhatIBuild />
        <CoreSkills />
        <TechStackVisualization />
        <FeaturedProjects />
        <Experience />
        <Achievements />
        <LeadershipCommunity />
        <TeachingSharing />
        <CurrentlyExploring />
        <Journey />
      </main>
      <Footer />
    </div>
  );
}

export default App;
