"use client"; 
import Navbar from '@/app/components/Navbar';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Copy } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("umekalsoomrizvia@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-black min-h-screen text-white flex flex-col overflow-hidden relative">
      <Navbar />
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#d9007b]/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="flex-grow' flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-4xl mx-auto w-full text-center z-10">
        
        <p className="text-[#d9007b] font-bold tracking-[0.3em] text-[10px] mb-4 uppercase animate-pulse">
          LET'S CONNECT
        </p>
        
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-16 tracking-tight">
          Get In <span className="text-[#d9007b]">Touch</span>
        </h1>

        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
          
          {/* Email Pill with Copy Feature */}
          <button 
            onClick={copyEmail}
            className="bg-[#141414]/50 backdrop-blur-md border border-zinc-800 rounded-full py-5 px-10 flex items-center gap-4 w-fit hover:border-[#d9007b] hover:-translate-y-1 transition-all duration-300 group relative"
          >
            <Mail className="text-[#d9007b]" size={20} />
            <span className="text-lg font-medium">umekalsoomrizvia@gmail.com</span>
            <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 ml-2" />
            {copied && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#d9007b] text-white text-xs py-1 px-3 rounded-md">Copied!</span>
            )}
          </button>

          {/* Phone Pill */}
          <a 
            href="tel:+923416510832"
            className="bg-[#141414]/50 backdrop-blur-md border border-zinc-800 rounded-full py-5 px-12 flex items-center gap-4 w-fit hover:border-[#d9007b] hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="text-[#d9007b]" size={20} />
            <span className="text-lg font-medium text-white">0341 651 0832</span>
          </a>

          {/* Location Pill */}
          <div className="bg-[#141414]/50 backdrop-blur-md border border-zinc-800 rounded-full py-5 px-10 flex items-center gap-4 w-fit hover:border-[#d9007b]/20 transition-all">
            <MapPin className="text-[#d9007b]" size={20} />
            <span className="text-gray-300 text-lg font-medium">Yazman, Bahawalpur, Pakistan</span>
          </div>

        </div>

        {/* Enhanced Social Icons */}
        <div className="flex items-center justify-center gap-8 mt-20">
          {[
            { icon: <Github size={24} />, link: "https://github.com/umekalsoom68" },
            { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/um-e-kalsoom-rizvia-495b59313" },
            { icon: <Instagram size={24} />, link: "https://www.instagram.com/aafffiii_68" }
          ].map((social, i) => (
            <Link 
              key={i}
              href={social.link} 
              target="_blank" 
              className="w-14 h-14 bg-zinc-900/50 border border-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-[#d9007b] hover:shadow-[0_0_20px_rgba(217,0,123,0.3)] transition-all duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}