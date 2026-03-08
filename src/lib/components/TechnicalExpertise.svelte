<script>
  const expertise = [
    {
      category: "Programming",
      skills: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "C", icon: "https://cdn.simpleicons.org/c" },
        { name: "SQL", icon: "https://cdn.simpleicons.org/mysql" }
      ]
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
        { name: "Computer Vision", icon: "https://cdn.simpleicons.org/opencv" },
        { name: "Deep Learning", icon: "https://cdn.simpleicons.org/keras" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
        { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
        { name: "Matplotlib", icon: "https://cdn.simpleicons.org/matplotlib" },
        { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" }
      ]
    },
    {
      category: "Data Analytics",
      skills: [
        { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi" },
        { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" }
      ]
    },
    {
      category: "Web & UI",
      skills: [
        { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
        { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
        { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "SvelteKit", icon: "https://cdn.simpleicons.org/svelte" }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: "https://cdn.simpleicons.org/git" },
        { name: "LaTeX", icon: "https://cdn.simpleicons.org/latex" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" }
      ]
    }
  ];
</script>

<section id="skills" class="py-24 bg-[#0a0a0a]">
  <div class="container mx-auto px-6">
    <div class="mb-16">
      <h2 class="text-4xl font-black uppercase tracking-tighter text-white">
        Technical <span class="text-amber-400">Expertise</span>
      </h2>
      <div class="h-1.5 w-20 bg-amber-400 mt-2"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each expertise as group}
        <div class="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/50 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(250,204,21,0.1)]">
          <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80 mb-8 border-b border-white/5 pb-4">
            {group.category}
          </h3>
          
          <div class="grid grid-cols-2 gap-4">
            {#each group.skills as skill}
              <div class="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:border-white/20 cursor-default group/skill">
                <div class="w-6 h-6 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} class="max-w-full max-h-full object-contain" />
                </div>
                <span class="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors truncate">
                  {skill.name}
                </span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    animation: fadeIn 1s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
