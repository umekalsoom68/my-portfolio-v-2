import Navbar from '@/app/components/Navbar';

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        
        {/* PROFESSIONAL EXPERIENCE */}
        <p className="text-[#d9007b] font-bold tracking-[0.3em] text-[10px] mb-4 text-center uppercase">
          MY JOURNEY
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-20">
          Professional Experience
        </h1>

        <div className="relative border-l-2 border-[#d9007b] ml-4 md:ml-10 pl-10 mb-24">
          
          <div className="absolute -left-2.75 top-0 w-5 h-5 bg-black border-2 border-[#d9007b] rounded-full flex items-center justify-center">
             <div className="w-2 h-2 bg-[#d9007b] rounded-full"></div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">Frontend Developer</h2>
          <p className="text-[#d9007b] font-bold text-sm mb-6 uppercase tracking-wider italic">
            Self-Practice & Collaborative Experience
          </p>
          
          <div className="text-gray-400 leading-relaxed text-sm md:text-base max-w-3xl space-y-4">
            <p>
              I am a dedicated Frontend Developer from Bahawalpur, currently pursuing a BS in Computer Science at The Islamia University of Bahawalpur (IUB)**. My journey is driven by a passion for building clean, responsive, and user-friendly web interfaces.
            </p>
            <p>
              I have hands-on experience in modern web technologies including HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and Next.js**. I actively engage in self-practice and have successfully contributed to collaborative projects like **Astrofeed**, working alongside my teacher and peers to deliver high-quality code.
            </p>
          </div>
        </div>

        {/* SECTION 2*/}
        <p className="text-[#d9007b] font-bold tracking-[0.3em] text-[10px] mb-4 text-center uppercase">
          ACADEMIC BACKGROUND
        </p>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-center mb-16">
          Education
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#141414] p-8 rounded-4xl border-l-4 border-[#d9007b] hover:bg-[#1a1a1a] transition-all group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#d9007b] transition-colors uppercase">BS Computer Science</h3>
            <p className="text-[#d9007b] text-sm font-bold italic mb-6">Currently Pursuing - IUB</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Studying at "The Islamia University of Bahawalpur", I am building a robust foundation in computer science fundamentals, including algorithms, data structures, and software engineering principles.
            </p>
          </div>

          <div className="bg-[#141414] p-8 rounded-4xl border-l-4 border-[#d9007b] hover:bg-[#1a1a1a] transition-all group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#d9007b] transition-colors uppercase">Frontend Development</h3>
            <p className="text-[#d9007b] text-sm font-bold italic mb-6">Certification - AKHEWS</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Completed an intensive Frontend Development course at **Allama Khadim Hussain Educational and Welfare System (AKHEWS)**, mastering the art of creating modern, responsive web applications.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}