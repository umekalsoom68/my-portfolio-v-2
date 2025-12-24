
export default function Hero() {
    return (
      <section className="relative min-h-[90vh] bg-gradient-to-r from-[#d9007b] to-[#b30066] flex flex-col justify-center px-8 md:px-20 py-20 text-white overflow-hidden">
        
        {/* Sub-heading */}
        <h3 className="text-cyan-400 font-bold tracking-[0.2em] text-sm mb-6 uppercase">
          FRONTEND DEVELOPER & UI ENTHUSIAST 
        </h3>
  
        {/* Main Name Heading */}
        <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-4">
          Ume Kalsoom <br /> Rizvia 
        </h1>
  
        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl font-medium mb-8 opacity-90">
          Building Beautiful Digital Experiences 
        </h2>
  
        {/* Description */}
        <p className="max-w-2xl text-lg leading-relaxed mb-12 opacity-85">
          Passionate Frontend Developer specializing in responsive, interactive web
          applications. Currently pursuing BS Computer Science with expertise in modern
          technologies including React, Next.js, TypeScript, and  Tailwind CSS. 
        </p>
  
        {/* Buttons */}
        <div className="flex flex-wrap gap-5">
          <button className="bg-white text-[#d9007b] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Get In Touch 
          </button>
          <button className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#d9007b] transition">
            View Projects 
          </button>
        </div>
  
      </section>
    );
  }