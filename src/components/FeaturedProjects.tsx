import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, LayoutDashboard, BrainCircuit, Activity, MessageSquare, Image as ImageIcon } from 'lucide-react';
import { Github } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects = [
    {
      title: 'Image Sharpening using Knowledge Distillation',
      category: 'Machine Learning / Computer Vision',
      label: 'Featured ML Project',
      description: 'Deep learning image restoration project focused on recovering sharp, high-quality images from blurred inputs using a U-Net based architecture, residual learning and knowledge-distillation techniques.',
      tags: 'Python, PyTorch, Deep Learning, U-Net, Knowledge Distillation, Computer Vision, PSNR, SSIM',
      icon: ImageIcon,
      repo: 'https://github.com/athira-anil2327/Intel-unnathi',
      isProminent: true,
      popupTitle: 'Image Deblurring using Residual U-Net',
      popupCategory: 'Machine Learning · Computer Vision · Deep Learning',
      simpleExplanation: (
        <>
          <strong>Ever taken a photo while moving and ended up with a blurry image?</strong> This project explores how deep learning can help bring back the sharpness and details lost in that blur. I built a model that learns from pairs of blurred and sharp images, teaching it how to transform a blurry input into a clearer, more detailed image. The goal is to make image restoration more effective while keeping the original structure and important details intact.
        </>
      ),
      technicalExplanation: (
        <>
          The project implements an <strong>image deblurring system using a modified Residual U-Net architecture</strong>. The model follows an encoder-decoder structure to learn image features at different levels, while residual blocks help it learn deeper features and reconstruct fine details more effectively. It is trained on the <strong>GOPRO dataset</strong> using a combined <strong>L1 + SSIM loss</strong>, allowing the model to optimize both pixel-level accuracy and structural similarity. I used <strong>Adam optimization with learning-rate scheduling</strong> during training and evaluated the restored images using <strong>PSNR and SSIM</strong>, comparing the blurred input, model output, and ground-truth sharp image.
        </>
      ),
      snapshot: {
        'Architecture': 'Residual U-Net',
        'Dataset': 'GOPRO',
        'Loss': 'L1 + SSIM',
        'Framework': 'PyTorch',
        'Evaluation': 'PSNR + SSIM'
      }
    },
    {
      title: 'Smart City Traffic Monitoring',
      category: 'Machine Learning / Smart City',
      label: 'Featured ML Project',
      description: 'A smart-city machine learning project focused on traffic monitoring, vehicle detection and traffic-flow analysis for real-world intelligent transportation applications.',
      tags: 'Python, Machine Learning, Computer Vision, Object Detection, Traffic Monitoring, Smart City',
      icon: BrainCircuit,
      repo: 'https://github.com/athira-anil2327/taiwan',
      isProminent: true,
      popupTitle: 'Smart City Traffic Monitoring System',
      popupCategory: 'Machine Learning · Computer Vision · Smart City',
      simpleExplanation: (
        <>
          <strong>Ever wondered how a city can keep track of traffic without someone sitting and watching cameras all day?</strong> This project uses computer vision to analyse traffic footage and automatically detect vehicles on the road. I worked on building a system that can identify vehicles from video and use that information to understand traffic movement. The idea is to make traffic monitoring faster, more automated, and useful for real-world smart city applications.
        </>
      ),
      technicalExplanation: (
        <>
          The project focuses on <strong>real-time vehicle detection and traffic monitoring using computer vision</strong>. I worked with <strong>YOLO-based object detection</strong> to identify vehicles from traffic footage and used video-processing techniques to analyse the detected vehicles. The system combines a <strong>Python-based backend</strong> with a web interface, allowing detection results to be processed and presented through an interactive application. The project is aimed at extending traditional traffic monitoring into a more responsive, automated system that can support intelligent traffic-management applications.
        </>
      ),
      snapshot: {
        'Detection': 'YOLO · Ultralytics',
        'Backend': 'Python · FastAPI',
        'Computer Vision': 'OpenCV · Supervision',
        'Frontend': 'React · Vite',
        'Application': 'Vehicle Detection · Traffic Monitoring · Smart City Solutions'
      }
    },
    {
      title: 'LifeSync',
      category: 'AI / Full-Stack',
      description: 'An all-in-one AI-powered life management platform designed to bring everyday planning, productivity and personal tracking into one connected system.',
      tags: 'AI, Machine Learning, Web Development, Automation, Data Tracking',
      icon: Activity,
      repo: 'https://github.com/dais-x/LifeSync',
      isProminent: false,
      popupTitle: 'LifeSync',
      popupCategory: 'AI · Automation · Productivity · Wellness',
      simpleExplanation: (
        <>
          <strong>Ever wished your to-do list could organise itself instead of adding more work to your day?</strong> LifeSync is an AI-powered life management system designed to bring tasks, schedules, and everyday well-being into one place. It can collect tasks from different sources, understand what needs to be done, prioritise them, and automatically plan them around your available time and energy. It also includes features such as voice-based task input, wellness tracking, reminders, and an AI chatbot, making everyday planning more adaptive and less overwhelming.
        </>
      ),
      technicalExplanation: (
        <>
          LifeSync is a <strong>semi-autonomous intelligent task scheduling system</strong> built around automated data collection, NLP-based task processing, and adaptive scheduling. <strong>n8n</strong> is used as the workflow orchestration layer to collect actionable information from sources such as Gmail and messaging platforms. <strong>Whisper</strong> enables voice-based task input, while the scheduling engine evaluates task priority, deadlines, user behaviour, and <strong>Energy Level Scoring (ELS)</strong> to determine suitable time slots. The system also includes automatic rescheduling through Ghost Mode, an AI chatbot interface, and wellness-oriented modules for creating a more context-aware productivity system.
        </>
      ),
      snapshot: {
        'Automation': 'n8n',
        'AI / NLP': 'NLP · Machine Learning · Whisper',
        'Backend': 'Python',
        'Frontend': 'SvelteKit · HTML · CSS · JavaScript',
        'Core': 'Adaptive Scheduling · Task Automation'
      }
    },
    {
      title: 'Novox Edtech Dashboard',
      category: 'Full-Stack Development',
      description: 'A centralized dashboard designed to bring everyday academic and organisational operations into one place.',
      tags: 'React, Node.js, Express, PostgreSQL, Supabase, Tailwind, RBAC',
      icon: LayoutDashboard,
      repo: 'https://github.com/novoxedtechllp-dotcom/novox_dashboard',
      isProminent: false,
      popupTitle: 'Novox Edtech Dashboard',
      popupCategory: 'Full-Stack Development · Education · Management Systems',
      simpleExplanation: (
        <>
          <strong>Managing an educational organisation involves much more than keeping track of students.</strong> This project is a centralised dashboard designed to bring everyday academic and organisational operations into one place. It allows different teams to manage students, employees, attendance, leave, payroll, recruitment, courses, and other administrative tasks through a single platform. I worked on building a system where each user sees the tools and information relevant to their role, making the overall workflow more organised and efficient.
        </>
      ),
      technicalExplanation: (
        <>
          The <strong>Novox Edtech Dashboard</strong> is a full-stack administrative platform built with a <strong>React-based frontend and Node.js/Express backend</strong>. It implements <strong>role-based access control (RBAC)</strong> to provide different permissions and dashboards for Admin, HR, Design, Development, and Staff users. The backend uses <strong>Supabase/PostgreSQL</strong> for data management, with <strong>JWT authentication</strong> and validation for secure API operations. The platform includes modules for employee and student management, attendance and leave workflows, payroll and fee tracking, CRM and recruitment, course management, and operational analytics.
        </>
      ),
      snapshot: {
        'Frontend': 'React · Vite · Tailwind CSS',
        'Backend': 'Node.js · Express.js',
        'Database': 'PostgreSQL · Supabase',
        'Authentication': 'JWT · bcryptjs',
        'Other': 'Cloudinary · REST APIs · RBAC'
      }
    },
    {
      title: 'Novox Edtech Chatbot',
      category: 'AI / Generative AI',
      description: 'An AI-powered chatbot developed for the Novox Edtech website to assist users and provide an interactive experience.',
      tags: 'Generative AI, NLP, Chatbot Development, React, Web Integration',
      icon: MessageSquare,
      repo: 'https://novoxedtechllp.com',
      isProminent: false,
      popupTitle: 'Novox Edtech Chatbot',
      popupCategory: 'AI · Chatbot · NLP · Web Development',
      simpleExplanation: (
        <>
          <strong>What if a website could answer your questions instead of making you search through every page?</strong> I built and integrated an AI-powered chatbot for the Novox Edtech website to help visitors quickly find information about courses, enrolment, placements, and the institute. The chatbot works directly within the website, understands user questions, and provides relevant responses through a conversational interface.
        </>
      ),
      technicalExplanation: (
        <>
          This project involved building and integrating an <strong>AI-powered conversational chatbot</strong> into a production website. The system processes <strong>natural-language queries</strong> and generates contextual responses related to Novox Edtech's courses, services, and general information. I worked on the <strong>chatbot integration</strong>, conversational interface, and deployment within the existing web application, creating a real-world AI feature that users can interact with directly.
        </>
      ),
      snapshot: {
        'AI': 'Conversational AI · NLP',
        'Integration': 'Web-based Chatbot',
        'Frontend': 'React / Web Technologies',
        'Application': 'Novox Edtech Website',
        'Focus': 'AI Integration · User Interaction · Deployment'
      }
    },
  ];

  return (
    <>
      <section id="projects" className="py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-text-cream mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-sakura"></span>
                PROJECTS
              </h2>
              <p className="text-milk-tea font-sans">
                Machine Learning → Computer Vision → Generative AI → Intelligent Systems
              </p>
            </div>
            <a href="https://github.com/athira-anil2327" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sakura hover:text-text-cream transition-colors text-sm uppercase tracking-widest font-medium">
              View GitHub <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index} 
                  onClick={() => setSelectedProject(project)}
                  className={`group glass-card cursor-pointer p-8 hover:bg-dark-chocolate hover:border-sakura transition-colors duration-500 flex flex-col h-full ${project.isProminent ? 'md:col-span-2 lg:col-span-1 border-sakura/30 shadow-[0_0_15px_rgba(var(--color-sakura-rgb),0.05)]' : ''}`}
                >
                  <div className="flex-grow flex flex-col h-full relative">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-sakura/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                    
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-brand-bg border border-sakura/30 flex items-center justify-center text-sakura">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="flex gap-3 text-aloewood items-center z-10">
                        {project.label && (
                          <span className="text-[10px] uppercase tracking-widest bg-brand-bg px-2 py-1 rounded border border-aloewood text-sakura mr-2 font-medium">
                            {project.label}
                          </span>
                        )}
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub" onClick={(e) => e.stopPropagation()} className="hover:text-sakura transition-colors">
                          <Github size={20} />
                        </a>
                      </div>
                    </div>

                    <div className="flex-grow z-10">
                      <p className="text-xs font-sans text-sakura mb-2 uppercase tracking-wider font-medium">{project.category}</p>
                      <h3 className="text-xl font-serif font-medium text-text-cream mb-3 group-hover:text-sakura transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-beige font-sans text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 mt-auto border-t border-aloewood/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
                      <p className="text-[11px] font-sans text-milk-tea tracking-wide uppercase flex-1 leading-relaxed">
                        {project.tags}
                      </p>
                      <div className="flex gap-4 items-center">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-sakura group-hover:text-text-cream transition-colors whitespace-nowrap">
                          Show More
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-sakura hover:text-text-cream transition-colors whitespace-nowrap bg-dark-chocolate/50 hover:bg-sakura hover:text-dark-chocolate px-3 py-1.5 rounded-full border border-sakura/30">
                          View Project <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Static Modal with Bottom-to-Top Clip Path Reveal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none p-4 md:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              className="absolute inset-0 bg-brand-bg/40 backdrop-blur-md pointer-events-auto"
              style={{ willChange: 'opacity' }}
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.05, ease: "easeOut" } }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.05, ease: "easeIn" } }}
              className="relative w-[95%] md:w-[62vw] max-w-[950px] h-[85vh] md:h-[68vh] max-h-[720px] flex flex-col pointer-events-auto bg-brand-bg-card/75 backdrop-blur-xl border border-sakura/40 rounded-3xl shadow-2xl overflow-hidden"
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="p-8 md:p-14 overflow-y-auto w-full h-full custom-scrollbar flex flex-col pb-16">
                
                {/* Header Anchored Section */}
                <div className="flex items-center gap-6 mb-12 shrink-0">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-brand-bg/50 border border-sakura/40 flex items-center justify-center text-sakura shadow-sm backdrop-blur-md">
                    {selectedProject.icon && <selectedProject.icon size={26} strokeWidth={1.5} />}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-3xl font-serif font-bold text-text-cream mb-2">
                      {selectedProject.popupTitle || selectedProject.title}
                    </h2>
                    <p className="text-xs md:text-[13px] font-sans text-sakura uppercase tracking-widest font-medium">
                      {selectedProject.popupCategory || selectedProject.category}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="mb-12">
                    <h3 className="text-lg md:text-xl font-serif font-medium text-text-cream mb-5 flex items-center gap-4">
                      <span className="w-6 h-px bg-sakura"></span>
                      What is this project?
                    </h3>
                    <p className="text-text-beige font-sans leading-relaxed text-sm md:text-base pl-10">
                      {selectedProject.simpleExplanation || selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.technicalExplanation && (
                    <div className="mb-14">
                      <h3 className="text-lg md:text-xl font-serif font-medium text-text-cream mb-5 flex items-center gap-4">
                        <span className="w-6 h-px bg-sakura"></span>
                        Technical Explanation
                      </h3>
                      <p className="text-text-beige font-sans leading-relaxed text-sm md:text-base pl-10">
                        {selectedProject.technicalExplanation}
                      </p>
                    </div>
                  )}

                  {selectedProject.snapshot && (
                    <div className="mb-14">
                      <h3 className="text-lg md:text-xl font-serif font-medium text-text-cream mb-6 flex items-center gap-4">
                        <span className="w-6 h-px bg-sakura"></span>
                        Technical Snapshot
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 pl-10">
                        {Object.entries(selectedProject.snapshot).map(([key, value]) => (
                          <div key={key} className="bg-brand-bg/30 border border-aloewood/30 rounded-2xl p-5 flex flex-col justify-center transition-colors hover:bg-brand-bg/50 hover:border-sakura/50">
                            <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-milk-tea mb-1.5 font-medium">{key}</span>
                            <span className="text-sm md:text-[15px] font-semibold text-text-cream">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-auto pt-8 border-t border-aloewood/20 flex flex-col sm:flex-row gap-5 sm:items-center pl-10">
                    <a 
                      href={selectedProject.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 bg-sakura text-dark-chocolate hover:bg-text-cream transition-colors rounded-full font-medium tracking-wide text-sm shadow-lg shadow-sakura/20"
                    >
                      Visit Project <ArrowUpRight size={16} />
                    </a>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="flex-1 md:flex-none flex items-center justify-center px-8 py-3 border border-aloewood text-text-cream hover:bg-aloewood/20 transition-colors rounded-full font-medium tracking-wide text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
