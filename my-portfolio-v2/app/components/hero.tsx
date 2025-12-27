import Image from 'next/image';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'; // Instagram icon add kiya
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex items-center px-8 md:px-20 py-20 text-white overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#d9007b]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Content */}
        <div className="z-10 order-2 lg:order-1">
          <h3 className="text-[#d9007b] font-bold tracking-[0.3em] text-xs mb-6 uppercase">
            FRONTEND DEVELOPER & UI ENTHUSIAST 
          </h3>

          <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Ume Kalsoom <br /> 
            <span className="text-white">Rizvia</span>
          </h1>

          <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-8">
            I am a BSCS student at **The Islamia University of Bahawalpur", 
            specializing in crafting responsive web applications with "Next.js & Tailwind CSS**.
          </p>

          {/* Social Links with your URLs */}
          <div className="flex gap-6 mb-10 text-gray-400">
            <Link href="https://github.com/umekalsoom68" target="_blank" className="hover:text-[#d9007b] transition-all hover:scale-110">
              <Github size={26} />
            </Link>
            <Link href="https://www.linkedin.com/in/um-e-kalsoom-rizvia-495b59313" target="_blank" className="hover:text-[#d9007b] transition-all hover:scale-110">
              <Linkedin size={26} />
            </Link>
            <Link href="https://www.instagram.com/aafffiii_68" target="_blank" className="hover:text-[#d9007b] transition-all hover:scale-110">
              <Instagram size={26} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-5">
            <button className="bg-[#d9007b] text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#b30066] transition shadow-lg shadow-[#d9007b]/20">
              Get In Touch 
            </button>
            <button className="border border-zinc-800 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-[#d9007b]/50 transition">
              View Projects 
            </button>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-100 lg:h-100">
            {/* Pink Border Frame */}
            <div className="absolute inset-0 border-2 border-[#d9007b] rounded-4xl translate-x-4 translate-y-4 opacity-50"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full bg-zinc-900 rounded-4xl overflow-hidden border border-zinc-800 z-10 shadow-2xl">
              <Image 
                src="/profile img.jpg" 
                alt="Ume Kalsoom Rizvia"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}