<script>
  import TechnicalExpertise from '$lib/components/TechnicalExpertise.svelte';
  const data = {
    name: "Athira Adiparambil Anil",
    location: "Kerala, India",
    contact: {
      email: "athiraanilansu@gmail.com",
      linkedin: "https://linkedin.com/in/athira-anil-562937290",
      github: ""
    },
    profile: "Computer Science undergraduate specializing in Machine Learning, Computer Vision, and Image Processing. Experienced in developing CNN-based models, applying knowledge distillation for efficient deep learning, and building ML-driven systems for real-world applications. Currently contributing to an international Smart City traffic optimization project through collaboration with Ching Chang University, Taiwan.",
    skills: {
      "Programming": ["Python", "C", "SQL"],
      "Machine Learning": ["Deep Learning", "Computer Vision", "Image Processing", "CNN Architectures", "U-Net", "Knowledge Distillation", "Model Compression"],
      "Frameworks & Libraries": ["PyTorch", "TensorFlow", "OpenCV", "NumPy", "scikit-image", "Matplotlib"],
      "Data Analytics": ["Power BI", "Business Intelligence", "Data Visualization", "Dashboard Development"],
      "Web & UI": ["HTML", "CSS", "Tailwind CSS", "shadcn/ui"],
      "Tools": ["Git", "LaTeX", "MySQL"]
    },
    education: [
      {
        degree: "Bachelor of Technology",
        field: "Computer Science Engineering",
        institution: "Saintgits College of Engineering",
        location: "Kerala, India",
        start_year: 2023,
        end_year: "Present",
        sgpa: "8.62/10"
      }
    ],
    projects: [
      {
        title: "Image Sharpening Using Knowledge Distillation",
        organization: "Intel Unnati AI/ML Program",
        description: "Developed a CNN-based image restoration system using a U-Net teacher–student architecture. Applied knowledge distillation to compress model size while maintaining performance. Achieved PSNR of 31.61 dB and SSIM of 0.94.",
        technologies: ["PyTorch", "NumPy", "scikit-image", "LaTeX"]
      },
      {
        title: "Smart Traffic Optimization System",
        organization: "ICCC Taiwan Internship",
        description: "Developing an ML-based system for traffic congestion prediction and reduction. International collaboration with Ching Chang University, Taiwan.",
        technologies: ["Machine Learning", "Traffic Data Analysis"],
        status: "Ongoing"
      },
      {
        title: "Face Recognition Attendance System",
        description: "Developed a computer vision-based automated attendance system using facial recognition with report generation in PDF format.",
        technologies: ["Computer Vision", "Python"]
      }
    ],
    internships: [
      {
        organization: "ICCC Taiwan Collaboration",
        duration: "2025 — Ongoing",
        role: "Machine Learning Research Intern",
        skills_gained: ["Traffic pattern analysis", "Smart city AI systems", "Research collaboration"]
      },
      {
        organization: "Intel Unnati Program",
        duration: "2025 — 2025",
        role: "Machine Learning Intern",
        skills_gained: ["Deep Learning", "Image Processing", "Knowledge Distillation", "Model Evaluation using PSNR and SSIM"]
      },
      {
        organization: "Cydez Technologies Pvt Ltd",
        location: "Infopark, Ernakulam",
        duration: "Unknown — 1 Month",
        role: "Web Development Intern",
        skills_gained: ["HTML", "CSS", "Tailwind CSS", "Web Development Workflow"]
      },
      {
        organization: "Stem Robotics",
        duration: "July 2024 (1 Week)",
        role: "AI and Data Science Intern",
        skills_gained: ["Machine Learning basics", "Data Science concepts", "AI fundamentals"]
      },
      {
        organization: "Stem Robotics",
        duration: "Jan 2024 (1 Week)",
        role: "Python Programming Intern",
        skills_gained: ["Python fundamentals", "Programming logic", "Basic automation"]
      }
    ],
    certifications: [
      "Power BI for Business Professionals - Infosys",
      "Data Visualization using Power BI - Infosys",
      "Agile Scrum Certification - Infosys",
      "Software Engineering and Agile Software Development - Infosys"
    ],
    leadership: [
      { role: "Media Head", organization: "ACM Student Chapter" },
      { role: "Design Team Member", organization: "Open Source Club" }
    ]
  };
</script>

<div class="hero">
  <div class="container hero-grid">
    <div class="hero-content">
      <div class="badge">Open for Internships & Research</div>
      <h1 class="hero-name">{data.name}<span class="text-yellow">.</span></h1>
      <h2 class="text-xl font-bold text-orange mb-6 uppercase tracking-wider">AI/ML Research Enthusiast</h2>
      <p class="subtitle">{data.profile}</p>
      <div class="hero-btns">
        <a href="#projects" class="btn">View Projects</a>
        <a href="/portfolio.pdf" download class="btn btn-outline flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </a>
      </div>
    </div>
    <div class="hero-image-container">
      <div class="photo-wrapper">
        <div class="photo-placeholder">
          <img src="/me.jpeg" alt={data.name} class="w-full h-full object-cover" />
        </div>
        <div class="photo-decoration"></div>
      </div>
    </div>
  </div>
</div>

<section id="internships" class="internships">
  <div class="container">
    <h2 class="section-title"><span class="text-orange">01.</span> Internships & Experience</h2>
    <div class="exp-list grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each data.internships as internship}
        <div class="exp-item bg-white/[0.02] p-8 border-l-4 border-white/10 hover:border-yellow transition-all hover:bg-white/[0.04] group">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h3 class="text-xl font-bold group-hover:text-yellow transition-colors">{internship.role}</h3>
              <div class="org text-orange text-sm font-black uppercase tracking-widest mt-1">{internship.organization}</div>
            </div>
            <span class="text-[0.6rem] font-black uppercase tracking-widest bg-white/5 px-3 py-1 text-gray border border-white/5">{internship.duration}</span>
          </div>
          {#if internship.location}
            <div class="text-xs text-gray/60 mb-4 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {internship.location}
            </div>
          {/if}
          <div class="flex flex-wrap gap-2 mt-4">
            {#each internship.skills_gained as skill}
              <span class="text-[0.6rem] font-bold uppercase tracking-tighter px-2 py-0.5 bg-white/5 text-gray/80 border border-white/5">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="projects" class="projects">
  <div class="container">
    <h2 class="section-title"><span class="text-yellow">02.</span> Selected Work</h2>
    <div class="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each data.projects as project}
        <div class="project-card bg-white/[0.03] p-10 border border-white/5 flex flex-col hover:border-yellow/30 transition-all group">
          <div class="project-top mb-4">
            {#if project.status}
              <span class="status-badge bg-orange text-white text-[0.6rem] px-2 py-1 font-black uppercase tracking-tighter">{project.status}</span>
            {/if}
            <h3 class="text-xl font-bold mt-2 group-hover:text-yellow transition-colors">{project.title}</h3>
            {#if project.organization}
              <div class="org text-orange text-xs font-bold uppercase mt-1">{project.organization}</div>
            {/if}
          </div>
          <p class="text-gray text-sm leading-relaxed flex-grow mb-6">{project.description}</p>
          <div class="tags flex flex-wrap gap-2">
            {#each project.technologies as tag}
              <span class="text-[0.6rem] font-black uppercase tracking-widest border border-white/10 px-3 py-1 text-yellow bg-white/5">{tag}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<TechnicalExpertise />

<section id="education" class="education">
  <div class="container education-grid grid grid-cols-1 lg:grid-cols-2 gap-20">
    <div class="edu-box">
      <h2 class="section-title"><span class="text-yellow">04.</span> Education</h2>
      {#each data.education as edu}
        <div class="edu-item mb-12">
          <h3 class="text-2xl font-bold">{edu.degree}</h3>
          <div class="text-yellow font-bold mt-1">{edu.institution}</div>
          <p class="text-gray mt-2">{edu.field} | SGPA: {edu.sgpa}</p>
          <span class="year text-xs uppercase tracking-widest font-black opacity-50">{edu.start_year} — {edu.end_year}</span>
        </div>
      {/each}
    </div>
    <div class="cert-box">
      <h2 class="section-title">Certifications</h2>
      <div class="cert-list space-y-4">
        {#each data.certifications as cert}
          <div class="cert-item pl-4 border-l-2 border-orange text-sm text-gray">{cert}</div>
        {/each}
      </div>
      <div class="leadership-list mt-12 pt-8 border-t border-white/5">
        <h3 class="text-sm font-black uppercase tracking-widest text-orange mb-6">Leadership Roles</h3>
        {#each data.leadership as lead}
          <div class="lead-item mb-4">
            <strong class="text-white">{lead.role}</strong>
            <span class="text-gray block text-sm">{lead.organization}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<section id="contact" class="contact pb-32">
  <div class="container">
    <div class="contact-box bg-white/[0.03] border-2 border-orange/50 py-24 px-10 text-center rounded-sm">
      <h2 class="text-5xl font-black mb-6">Let's build <span class="text-yellow italic">impactful</span> AI.</h2>
      <p class="text-gray max-w-2xl mx-auto mb-12 text-lg">Currently based in {data.location}. Open for research collaborations and machine learning engineering opportunities.</p>
      <div class="contact-links flex flex-wrap justify-center gap-6">
        <a href="mailto:{data.contact.email}" class="btn">Start a Conversation</a>
        <a href="{data.contact.linkedin}" target="_blank" class="btn btn-outline">Connect on LinkedIn</a>
      </div>
    </div>
  </div>
</section>
