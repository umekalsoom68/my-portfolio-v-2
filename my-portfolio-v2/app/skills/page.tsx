import Navbar from '@/app/components/Navbar';
import { Monitor, Cpu, Palette, Terminal } from 'lucide-react';

const skillData = [
  {
    title: "Core Technologies",
    icon: <Monitor className="text-white w-6 h-6" />,
    skills: ["HTML5 & Semantic Markup", "CSS3 & Modern Layouts", "JavaScript ES6+", "TypeScript"] // [cite: 20, 21, 22, 29, 30]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Cpu className="text-white w-6 h-6" />,
    skills: ["React.js", "Next.js", "Component Architecture", "State Management"] // [cite: 23, 24, 25, 31, 32]
  },
  {
    title: "Design & Styling",
    icon: <Palette className="text-white w-6 h-6" />,
    skills: ["Tailwind CSS", "Responsive Design", "UI/UX Principles", "Figma Prototyping"] // [cite: 26, 27, 36, 37]
  },
  {
    title: "Development Tools",
    icon: <Terminal className="text-white w-6 h-6" />,
    skills: ["Git & Version Control", "Web Performance", "API Integration", "Debugging & Testing"] // [cite: 33, 34, 35]
  }
];

export default function SkillsPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-6 flex flex-col items-center">
        <div className="text-center mb-16">
          <p className="text-[#d9007b] font-bold tracking-widest text-xs mb-4 uppercase">WHAT I DO</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Technical Expertise</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {skillData.map((category, index) => (
            <div key={index} className="bg-[#141414] border border-zinc-800 p-8 rounded-2xl hover:border-[#d9007b] transition-all">
              <div className="bg-[#d9007b] w-fit p-3 rounded-xl mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center gap-3">
                    <span className="text-[#d9007b]">→</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}