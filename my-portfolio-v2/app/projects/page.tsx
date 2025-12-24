import Navbar from '@/app/components/Navbar';
import { ExternalLink } from 'lucide-react';

const projectList = [
  {
    title: "Astro Feed",
    category: "COLLABORATIVE PROJECT",
    desc: "Collaborated with teachers and fellow students to develop a comprehensive web application. Gained experience in collaborative coding and version control.",
    tags: ["React", "JavaScript", "CSS3"],
    btnText: "Live Demo"
  },
  {
    title: "To-Do List App",
    category: "PERSONAL PROJECT",
    desc: "Built an interactive task management application with full CRUD functionality, prioritization, filtering, and local storage persistence for enhanced user experience.",
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    btnText: "Live Demo"
  },
  {
    title: "Weather Application",
    category: "PERSONAL PROJECT",
    desc: "Developed a dynamic weather application with API integration to fetch real-time weather data. Implemented geolocation features and responsive design.",
    tags: ["API Integration", "JavaScript", "Responsive", "Geolocation"],
    btnText: "Live Demo"
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-[#d9007b] font-bold tracking-[0.3em] text-xs mb-4 text-center uppercase">
          MY WORK
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-[#141414] rounded-[2.5rem] overflow-hidden border border-zinc-800 flex flex-col group hover:border-[#d9007b]/50 transition-all duration-300">
              
              {/* Top Pink Section */}
              <div className="bg-[#d9007b] p-10 h-48 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2 leading-tight">{project.title}</h3>
                <p className="text-[10px] font-bold tracking-widest opacity-90 uppercase italic">
                  {project.category}
                </p>
              </div>

              {/* Bottom Dark Section */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#1a1a1a] border border-zinc-800 text-gray-300 rounded-full text-[10px] group-hover:border-[#d9007b]/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-[#d9007b] py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b30066] transition-all shadow-lg shadow-magenta-900/20 mt-auto">
                  <ExternalLink size={16} />
                  {project.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}