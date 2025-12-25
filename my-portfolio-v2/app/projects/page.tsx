import Navbar from '@/app/components/Navbar';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; 

const projectList = [
  {
    title: "Astro Feed",
    category: "COLLABORATIVE PROJECT",
    image: "/astro feed.png", 
    desc: "Collaborated with teachers and fellow students to develop a comprehensive web application.",
    tags: ["React", "JavaScript", "CSS3"],
    btnText: "Live Demo",
    link: "https://astro-feed-main-s3ii.vercel.app/  " 
  },
  {
    title: "To-Do List App",
    category: "practice PROJECT",
    image: "/to do list.png",
    desc: "Built an interactive task management application with full CRUD functionality.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    btnText: "Live Demo",
    link: "#"
  },
  {
    title: "Weather Application",
    category: "practice PROJECT",
    image: "/weather app.png",
    desc: "Developed a dynamic weather application with API integration to fetch real-time weather data.",
    tags: ["API", "JavaScript", "Responsive"],
    btnText: "Live Demo",
    link: ""
  },
  {
    title: "Calculator",
    category: "PERSONAL PROJECT",
    image: "/calculator.png", 
    desc: "A fully functional calculator with a clean UI, capable of performing basic arithmetic operations with precision.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    btnText: "Live Demo",
    link: "http://ume-kalsoom-rizvia-calculator.surge.sh"
  },
  {
    title: "HealthCare Project",
    category: "FIGMA DESIGN",
    image: "/health care.png",
    desc: "Comprehensive UI/UX design for a healthcare application focusing on patient management.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    btnText: "View Design",
    link: "#"
  },
  {
    title: "Architects Website",
    category: "WEB DESIGN",
    image: "/artichets.png",
    desc: "A modern website design for an architectural firm, showcasing portfolios and project galleries.",
    tags: ["React", "Tailwind", "Figma"],
    btnText: "Live Demo",
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-[#d9007b] font-bold tracking-[0.3em] text-xs mb-4 text-center uppercase">MY WORK</p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16">Featured Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-[#141414] rounded-[2.5rem] overflow-hidden border border-zinc-800 flex flex-col group hover:border-[#d9007b]/40 transition-all duration-300">
              
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-hidden border-b border-zinc-800">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay for category */}
                <div className="absolute top-4 left-4 bg-[#d9007b] px-3 py-1 rounded-full">
                   <p className="text-[8px] font-bold tracking-widest uppercase italic">{project.category}</p>
                </div>
              </div>

              <div className="p-8 flex-grow' flex flex-col">
                <h3 className="text-2xl font-bold mb-3 leading-tight text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#1a1a1a] border border-[#d9007b]/20 text-[#d9007b] rounded-full text-[9px] font-medium uppercase">{tag}</span>
                  ))}
                </div>

                <Link 
                  href={project.link} 
                  target="_blank" 
                  className="w-full bg-[#d9007b] py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#b30066] transition-all mt-auto uppercase shadow-lg shadow-[#d9007b]/10"
                >
                  <ExternalLink size={14} />
                  {project.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}