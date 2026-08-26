import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      role: 'ML Research Intern at Integrated Command & Control Unit (ICCC)',
      company: 'Saintgits College of Engineering × National Chung Cheng University',
      year: 'July 2025 – Present',
      status: 'ONGOING',
      shortDescription: 'Working on an AI-based smart-city traffic management initiative that combines Machine Learning and Computer Vision to build more intelligent traffic monitoring solutions.',
      fullDescription: [
        'Contributing to an international smart-city research initiative focused on improving traffic monitoring and management. My work involves developing a real-time traffic monitoring system capable of detecting and tracking vehicles and analysing traffic flow. The project aims to move beyond conventional monitoring by using AI to make traffic analysis more responsive and useful for real-world urban transportation applications.',
        'I am working at the intersection of Machine Learning, Computer Vision, vehicle detection, object tracking, and smart-city technologies, gaining experience in applying AI to a real-world transportation problem.'
      ],
      techStack: ['Python', 'Machine Learning', 'Computer Vision', 'YOLO', 'OpenCV', 'Object Detection', 'Object Tracking', 'Traffic Monitoring']
    },
    {
      role: 'AI & Automation Intern',
      company: 'Novox Edtech LLP',
      year: 'May – June 2026',
      status: 'COMPLETED',
      shortDescription: 'Worked on practical AI, Generative AI, and automation solutions, including an AI chatbot integrated into the Novox Edtech website.',
      fullDescription: [
        'Worked on developing and integrating AI-powered solutions for educational applications. One of my major contributions was building the Novox Edtech Chatbot, an AI-powered conversational assistant integrated directly into the company\'s working website to help visitors find information about courses, enrolment, placements, and the organisation.',
        'I also worked with RAG-based systems, LLM-powered applications, Generative AI, and workflow automation, including n8n-based automation. The internship gave me practical experience in taking AI concepts and turning them into usable applications that interact with real users and business workflows.'
      ],
      techStack: ['Generative AI', 'LLMs', 'RAG', 'AI Chatbots', 'n8n', 'NLP', 'Python', 'Full-Stack Development', 'Automation']
    },
    {
      role: 'Machine Learning Intern',
      company: 'Intel Unnati Industrial Training Program',
      year: 'May – July 2025',
      status: 'COMPLETED',
      shortDescription: 'Developed a deep-learning based image deblurring system that restores details from blurred images using a Residual U-Net.',
      fullDescription: [
        'Worked on image restoration using deep learning, specifically focusing on removing motion blur from images. I developed a modified Residual U-Net architecture that learns from pairs of blurred and sharp images and attempts to reconstruct the lost details.',
        'The model was trained using the GOPRO dataset with a combined L1 + SSIM loss, and the results were evaluated using PSNR and SSIM. This project gave me practical experience in deep-learning model development, image restoration, training optimisation, and quantitative evaluation of computer-vision models.'
      ],
      techStack: ['Python', 'PyTorch', 'Deep Learning', 'Computer Vision', 'Residual U-Net', 'GOPRO', 'L1 + SSIM', 'PSNR', 'SSIM']
    },
    {
      role: 'Web Development Intern',
      company: 'Cydez Technologies, Kakkanad',
      year: 'June – July 2025',
      status: 'COMPLETED',
      shortDescription: 'Worked on real-world web development projects and gained practical experience in building functional web applications.',
      fullDescription: [
        'Worked in a professional web-development environment, gaining hands-on experience in developing and working with real-world web applications. The internship strengthened my understanding of frontend development, application structure, responsive interfaces, backend integration, and full-stack workflows.',
        'The experience helped me understand how web applications are developed beyond academic projects, including working with existing codebases, integrating different components, solving implementation problems, and building interfaces intended for actual users.'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Frontend Development', 'Backend Integration', 'Full-Stack Development', 'Responsive UI']
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-text-cream mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-sakura"></span>
          EXPERIENCE
        </h2>

        {/* Experience Timeline */}
        <div className="relative border-l border-aloewood ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            const isOngoing = exp.status === 'ONGOING';
            
            return (
              <div key={index} className="relative pl-8 md:pl-12 group">
                <div className={`absolute w-4 h-4 rounded-full -left-[8.5px] top-1 transition-colors ${isOngoing ? 'bg-sakura border-2 border-brand-bg shadow-[0_0_12px_rgba(var(--color-sakura-rgb),0.8)]' : 'bg-dark-chocolate border-2 border-sakura group-hover:bg-sakura shadow-[0_0_10px_rgba(var(--color-sakura-rgb),0.5)]'}`}></div>
                
                <div 
                  onClick={() => toggleExpand(index)}
                  className="glass-card cursor-pointer p-6 md:p-8 hover:border-sakura/40 hover:shadow-[0_0_15px_rgba(var(--color-sakura-rgb),0.05)] transition-all duration-300 flex flex-col"
                >
                  
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-serif font-medium text-text-cream mb-1">{exp.role}</h3>
                      <p className="text-milk-tea text-sm font-sans">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="px-3 py-1 bg-dark-chocolate/50 border border-aloewood/50 rounded-full text-xs text-text-beige whitespace-nowrap">
                        {exp.year}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${isOngoing ? 'bg-sakura/20 text-sakura border-sakura/40' : 'bg-brand-bg/50 text-milk-tea border-aloewood/30'}`}>
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Always-visible short description */}
                  <p className="text-text-beige font-sans text-[15px] leading-relaxed max-w-3xl mb-5">
                    {exp.shortDescription}
                  </p>

                  {/* Expandable Section */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto", marginTop: 16 },
                          collapsed: { opacity: 0, height: 0, marginTop: 0 }
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-aloewood/20 space-y-6">
                          <div>
                            {exp.fullDescription.map((para, pIdx) => (
                              <p key={pIdx} className="text-text-beige font-sans text-sm md:text-[15px] leading-relaxed mb-4 last:mb-0">
                                {para}
                              </p>
                            ))}
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-bold text-sakura uppercase tracking-widest mb-3 flex items-center gap-2">
                              <span className="w-4 h-px bg-sakura/50"></span>
                              Tech Stack / Skills
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {exp.techStack.map((tech, tIdx) => (
                                <span key={tIdx} className="bg-brand-bg/50 border border-aloewood/30 px-3 py-1.5 rounded-md text-[11px] font-medium text-text-cream/90 transition-colors hover:border-sakura/40 hover:bg-dark-chocolate/40">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Show More / Show Less Toggle Button */}
                  <button 
                    className="mt-3 self-start flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sakura group-hover:text-text-cream transition-colors group/btn"
                  >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
