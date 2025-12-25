import Navbar from '@/app/components/Navbar';
import { Code2, Layout, Layers, Figma, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Core Web Technologies",
    icon: <Code2 className="text-[#d9007b] w-8 h-8" />,
    skills: ["HTML5 & Semantic Markup", "CSS3 & Advanced Styling", "JavaScript (ES6+)", "TypeScript", "Responsive Web Design"]
  },
  {
    title: "CSS Frameworks & Styling",
    icon: <Layout className="text-[#d9007b] w-8 h-8" />,
    skills: ["Tailwind CSS", "Bootstrap", "Sass/SCSS", "CSS Modules", "Styled Components", "Framer Motion", "GSAP"]
  },
  {
    title: "JS Frameworks & Libraries",
    icon: <Layers className="text-[#d9007b] w-8 h-8" />,
    skills: ["Next.js (SSR, SSG, ISR)", "Next Router", "Next Hooks", "Context API"]
  },
  {
    title: "UI/UX & Design Tools",
    icon: <Figma className="text-[#d9007b] w-8 h-8" />,
    skills: ["Figma", "Adobe XD", "UI/UX Principles", "Prototyping", "Wireframing", "Design Systems"]
  },
  {
    title: "Version Control & Workflow",
    icon: <GitBranch className="text-[#d9007b] w-8 h-8" />,
    skills: ["Git & GitHub", "Pull Requests", "Code Reviews", "Branch Management", "Merge Conflict Resolution"]
  }
];

export default function SkillsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <p className="text-[#d9007b] font-bold tracking-[0.3em] text-[10px] mb-4 text-center uppercase">
          MY EXPERTISE
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-20">
          Technical Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#141414] p-8 rounded-4xl border border-zinc-800 hover:border-[#d9007b]/50 transition-all group flex flex-col">
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-black rounded-2xl border border-zinc-800 group-hover:border-[#d9007b]/30 transition-all">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-black border border-zinc-800 text-gray-400 rounded-lg text-[11px] font-medium hover:text-[#d9007b] hover:border-[#d9007b]/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}